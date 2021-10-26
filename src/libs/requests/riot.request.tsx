import axios, { AxiosInstance } from 'axios'
import { cdnVersion } from 'models/cdnVersion';
import { Match } from 'models/match';
import { Rank } from 'models/rank';
import { Summoner } from 'models/summoner';
import getPlatformUrl from 'utils/getPlatformUrl';
import getRegionUrl from 'utils/getRegionUrl';
import Bottleneck from 'bottleneck';
import isDev from 'utils/isDev';

export class RiotRequests {

    limiter: Bottleneck;
    platform: AxiosInstance;
    region: AxiosInstance;
    common: AxiosInstance;

    constructor(region: string) {

        const { APIKEY, NODE_ENV } = process.env

        this.limiter = new Bottleneck({
            minTime: isDev ? 50 : 50//20
        });

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
        const encodedName = encodeURIComponent(name)
        const r = await this.limiter.schedule(() => this.platform.get<Summoner>(`/lol/summoner/v4/summoners/by-name/${encodedName}`));
        return r.data;
    }

    async ranks(summonerId: string) {
        const r = await this.limiter.schedule(() => this.platform.get<Rank[]>(`/lol/league/v4/entries/by-summoner/${summonerId}`));
        return r.data;
    }

    async cdnVersions(region: string) {
        const lowercaseRegion = region.toLocaleLowerCase()
        const r = await this.limiter.schedule(() => this.common.get<cdnVersion>(`https://ddragon.leagueoflegends.com/realms/${lowercaseRegion}.json`));
        return r.data;
    }

    async matches(puuid: string) {
        const r = await this.limiter.schedule(() => this.region.get<string[]>(`/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
            params: { count: 90 }
        }));
        return r.data;
    }

    async matchById(matchId: string) {
        const r = await this.limiter.schedule(() => this.region.get<Match>(`/lol/match/v5/matches/${matchId}`));
        return r.data;
    }
}