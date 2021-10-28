import axios, { AxiosInstance } from 'axios'
import { cdnVersion } from 'models/cdnVersion';
import { Match } from 'models/match';
import { Rank } from 'models/rank';
import { Summoner } from 'models/summoner';
import getPlatformUrl from 'utils/getPlatformUrl';
import getRegionUrl from 'utils/getRegionUrl';
import Qottle from 'qottle';
import isDev from 'utils/isDev';


export class RiotRequests {

    qottle: Qottle;

    platform: AxiosInstance;
    region: AxiosInstance;
    common: AxiosInstance;

    constructor(region: string) {

        const { APIKEY, NODE_ENV } = process.env

        this.qottle = new Qottle({
            log: isDev,
            rateLimited: true,
            rateLimitPeriod: 1000, //1 second
            rateLimitMax: 20 //20 requests
        })


        const platformBaseUrl = getPlatformUrl(region)
        this.platform = this.createAxiosInstance(platformBaseUrl, APIKEY)

        const regionBaseUrl = getRegionUrl(region)
        this.region = this.createAxiosInstance(regionBaseUrl, APIKEY)

        this.common = axios.create()
    }

    private createAxiosInstance(baseUrl: string, APIKEY: string){
        return axios.create({
            baseURL: baseUrl,
            headers: {
                'X-Riot-Token': APIKEY
            }
          });
    }

    async summoner(name: string) {

        try {
            const encodedName = encodeURIComponent(name)
            const r = await this.qottle.add(() => this.platform.get<Summoner>(`/lol/summoner/v4/summoners/by-name/${encodedName}`));
            return r.result.data;
        } catch (error) {
            
            throw new Error(`Summoner: ${JSON.stringify(error)}`)
        }
    }

    async ranks(summonerId: string) {
        try {
            const r = await this.qottle.add(() => this.platform.get<Rank[]>(`/lol/league/v4/entries/by-summoner/${summonerId}`));
            return r.result.data;
        } catch (error) {
            throw new Error(`Ranks: ${JSON.stringify(error)}`)
        }
    }

    async cdnVersions(region: string) {
        try {
            const lowercaseRegion = region.toLocaleLowerCase()
            const r = await this.qottle.add(() => this.common.get<cdnVersion>(`https://ddragon.leagueoflegends.com/realms/${lowercaseRegion}.json`));
            return r.result.data;
        } catch (error) {
            throw new Error(`CDN: ${JSON.stringify(error)}`)
        }
        
    }

    async matches(puuid: string, start: number, count: number, type: string) {
        try {
            const r = await this.qottle.add(() => this.region.get<string[]>(`/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
                params: { start, count, type }
            }));
            return r.result.data;  
        } catch (error) {
            throw new Error(`Matches: ${JSON.stringify(error)}`)
        }
    }

    async matchById(matchId: string) {
        try {
            const r = await this.qottle.add(() => this.region.get<Match>(`/lol/match/v5/matches/${matchId}`));
            return r.result.data;
        } catch (error) {
            throw new Error(`Match By Id: ${JSON.stringify(error)}`)
        }
        
    }
}