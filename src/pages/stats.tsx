import { MainContainer } from '@components/MainContainer'
import { useRouter } from 'next/router'
import { GetServerSideProps} from 'next'
import { ChampStatsList } from '@components/TierList'
import absoluteUrl from 'next-absolute-url'
import axios, { AxiosError } from 'axios'
import { Grid, HStack, VStack } from '@chakra-ui/react'
import { ErrorDialog } from '@components/ErrorDialog'


const Stats = ({ champStats, synergyAllies, synergyEnemies, dysergyAllies, dysergyEnemies, statusCode, message }: StatsPageProps) => {
  return (
    <MainContainer>
        {
            champStats ? (
                <VStack spacing="20px">
                    <ChampStatsList title="My Tier List" subtitle="These champs won in your last 50 games" champStats={champStats}/>
                    <Grid gap={6} templateColumns={{ base: "repeat(1, 1fr)" ,md: "repeat(2, 1fr)" }}>
                        <ChampStatsList title="Synergy" synergy subtitle="Most winning allies champs" champStats={synergyAllies} limit={3}/>
                        <ChampStatsList title="Synergy" synergy subtitle="Most losing enemies champs" champStats={synergyEnemies} limit={3}/>
                        <ChampStatsList title="Dysergy" dysergy subtitle="Most losing allies champs" champStats={dysergyAllies} limit={3}/>
                        <ChampStatsList title="Dysergy" dysergy subtitle="Most winning enemies champs" champStats={dysergyEnemies} limit={3}/>
                    </Grid>
                </VStack>): (
                <ErrorDialog message={message}/>
                )
        }
    </MainContainer>
)}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res, query } = context

    let { region, summoner } = query

    if(Array.isArray(region)){
        region = region[0]
    }

    if(Array.isArray(summoner)){
        summoner = summoner[0]
    }

    const { origin } = absoluteUrl(req)

    let [champStats, synergyAllies, synergyEnemies, dysergyAllies, dysergyEnemies] =  Array(5).fill(null); 

    try {

        const response = await axios.get<any>(`${origin}/api/stats`, {
            params: {
                region,
                summoner,
                count:50,
                type: 'ranked'
            }
        })

        champStats = response.data.champStats
        synergyAllies = response.data.synergy.allies
        synergyEnemies = response.data.synergy.enemies
        dysergyAllies = response.data.dysergy.allies
        dysergyEnemies =response.data.dysergy.enemies

    } catch (error) {
        const err = error as AxiosError
        return {
            props: {
                statusCode: err.response.status,
                message: err.response.data
            }
        }
    } 


        return {
            props: {
                 champStats,
                 synergyAllies,
                 synergyEnemies,
                 dysergyAllies,
                 dysergyEnemies
            }
        }
}

export default Stats

export interface StatsPageProps {
    statusCode?: number,
    message?: string,
    champStats?: ChampStat[],
    synergyAllies,
    synergyEnemies,
    dysergyAllies,
    dysergyEnemies
}
