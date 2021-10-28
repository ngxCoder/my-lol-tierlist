import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"
import { RiotRequests } from "libs/requests/riot.request";
import { Match } from "models/match";
import cooldownMiddleware from "@middlewares/cooldown.middleware";

const sortChamps = (a: any, b: any) =>  {
  if(a.percentage !== b.percentage){
    return b.percentage - a.percentage //sort by percentage 
  }

  if(a.total !== b.total){
    return b.total - a.total //sort by total
  }

  return a.champ.localeCompare(b.champ) //sort by champ name
}

export const stats = async (req: NextApiRequest, res: NextApiResponse) => {

  let { region, summoner, count, type } = req.query

  if(Array.isArray(region)){
    region = region[0]
  }
  
  if(Array.isArray(summoner)){
    summoner = summoner[0]
  }

  if(Array.isArray(summoner)){
    count = count[0]
  }

  if(Array.isArray(type)){
    type = type[0]
  }

  if(!region || !summoner){
    res.status(400).send('region and summoner required')
  }

  let convertedCount = parseInt(count as string)

  if(!count && !convertedCount){
    convertedCount = 95
  }

  if(convertedCount < 1 || convertedCount > 95) {
    convertedCount = 95
  }

  if(type !== 'ranked' && type !== 'normal' && type !== 'tourney' && type !== 'tutorial'){
    type = undefined
  }

  const request = new RiotRequests(region)

  try {
    const { id: summonerId, name, profileIconId, puuid } = await request.summoner(summoner)

    const { cdn: cdnUrl, n: { profileicon: profileUrlVersion } } = await request.cdnVersions(region)

    const profileImgUrl = `${cdnUrl}/${profileUrlVersion}/img/profileicon/${profileIconId}.png`

    const ranks = await request.ranks(summonerId)
    const rankMapped = ranks.map(({queueType, tier, rank}) => ({
      queueType,
      tier,
      rank
    }))

    const matchesId = await request.matches(puuid, 0, convertedCount, type as string)

    const matchesPromises = matchesId.map(matchId => request.matchById(matchId))

    const matches: Match[] = await Promise.all(matchesPromises)

    const champStats = matches.reduce((stats, current) => {

      const myTeamId = current.info.participants.find(participant => participant.summonerId === summonerId).teamId

      const currentMatchStats = current.info.participants.map(({ championName, teamId, win }) => ({
        champ: championName,
        ally: teamId === myTeamId,
        win: win
      }))

      currentMatchStats.forEach(({ champ, ally, win }) => {
        const prevChampStats = stats[champ] ?? []
        stats = { ...stats, [champ]: [...prevChampStats,  { ally, win } ]}
      })

      return stats

    }, {})

    const mostWinningChamps = Object.keys(champStats).map((key: string) => {
      const statsByMatch: { ally: boolean, win: boolean }[] = champStats[key]

      const winCount = statsByMatch.reduce((acc, current) => acc + (current.win ? 1: 0), 0)

      const total = statsByMatch.length ?? 0

      return { 
        champ: key,
        win: winCount,
        total: total, //matches
        percentage: winCount * 100 / total
      }
    })

    const sortedMostWinningChamps = mostWinningChamps.sort(sortChamps) 

    const mostWinningAllies = Object.keys(champStats).map((key: string) => {
      const statsByMatch: { ally: boolean, win: boolean }[] = champStats[key]

      const winCount = statsByMatch
      .filter(stat =>  stat.ally) //filter allies
      .reduce((acc, current) => acc + (current.win ? 1: 0), 0) //count winning allies

      const total = statsByMatch
      .filter(stat =>  stat.ally)
      .reduce((acc, current) => acc + 1, 0) //total allies matches

      return { 
        champ: key,
        win: winCount,
        total: total,
        percentage: winCount * 100 / total|| 0
      }
    }).sort(sortChamps)

    const mostLosingEnemies = Object.keys(champStats).map((key: string) => {
      const statsByMatch: { ally: boolean, win: boolean }[] = champStats[key]

      const loseCount = statsByMatch
      .filter(stat =>  !stat.ally) //filter enemies
      .reduce((acc, current) => acc + (current.win ? 0: 1) ,0) //count losing enemies

      const total = statsByMatch
      .filter(stat =>  !stat.ally)
      .reduce((acc, current) => acc + 1, 0) //total enemies matches

      return { 
        champ: key,
        lose: loseCount,
        total: total,
        percentage: loseCount * 100 / total || 0
      }
    }).sort(sortChamps)

    const mostLosingAllies = Object.keys(champStats).map((key: string) => {
      const statsByMatch: { ally: boolean, win: boolean }[] = champStats[key]

      const loseCount = statsByMatch
      .filter(stat =>  stat.ally) //filter allies
      .reduce((acc, current) => acc + (current.win ? 0: 1) ,0) //count losing allies

      const total = statsByMatch
      .filter(stat =>  stat.ally)
      .reduce((acc, current) => acc + 1, 0) //total allies matches

      return { 
        champ: key,
        lose: loseCount,
        total: total,
        percentage: loseCount * 100 / total || 0
      }
    }).sort(sortChamps)

    const mostWinningEnemies = Object.keys(champStats).map((key: string) => {
      const statsByMatch: { ally: boolean, win: boolean }[] = champStats[key]

      const winCount = statsByMatch
      .filter(stat =>  !stat.ally) //filter enemies
      .reduce((acc, current) => acc + (current.win ? 1: 0) ,0) //count winning enemies

      const total = statsByMatch
      .filter(stat =>  !stat.ally)
      .reduce((acc, current) => acc + 1, 0) //total enemies matches

      return { 
        champ: key,
        win: winCount,
        total: total,
        percentage: winCount * 100 / total || 0
      }
    }).sort(sortChamps)

    res.status(200).json({ 
      profile: {
        name: name,
        img: profileImgUrl
      },
      ranks: rankMapped,
      champStats: sortedMostWinningChamps,
      synergy: {
        allies: mostWinningAllies,
        enemies: mostLosingEnemies
      },
      dysergy: {
        allies: mostLosingAllies,
        enemies: mostWinningEnemies
      }
     })

  } catch (error) {
    throw new Error(error.stack);
  }
}


const handler = nc<NextApiRequest, NextApiResponse>()
.use(cooldownMiddleware)
.get(stats)

export default handler