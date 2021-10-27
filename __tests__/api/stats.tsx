import { stats } from "@pages/api/stats";
import { cleanup } from "@testing-library/react";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import summonerFixture from "../fixtures/summoner.fixture"
import rankFixture from "../fixtures/rank.fixture"
import cdnFixture from "../fixtures/cdnVersions.fixture"
import matchesFixture from "../fixtures/matches.fixture"
import matchByIdFixtures from "../fixtures/matchById.fixture"

jest.mock("axios");

beforeAll(() => {
  process.env.APIKEY = 'xxx'
  axios.defaults.adapter =  require('axios/lib/adapters/http');
  //@ts-ignore
  axios.create.mockReturnThis();
});

beforeEach(() => {
  cleanup()
})

describe('/api/stats', () => {
  it('returns the summoner stats', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {
        summoner: 'Necesito Amor',
        region: 'LAN'
      },
    });
    const axiosInstanceSpied: jest.SpyInstance<any, any> = jest.spyOn(axios.create(), 'get');

    axiosInstanceSpied
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data: summonerFixture })))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data:cdnFixture })))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data: rankFixture })))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data:matchesFixture })))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data: matchByIdFixtures[0]})))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data:matchByIdFixtures[1]})))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data:matchByIdFixtures[2]})))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data:matchByIdFixtures[3]})))
    .mockImplementationOnce(() => new Promise((resolve, reject) => resolve({ data:matchByIdFixtures[4]})))

    await stats(req, res)

    expect(res.statusCode).toBe(200);

    const data = res._getJSONData()

    expect(data).toMatchObject({
        profile: {
          name: 'Necesito Amor',
          img: 'https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/5117.png'
        },
        ranks: [
          {
            queueType: 'RANKED_SOLO_5x5',
            tier: 'CHALLENGER',
            rank: 'I'
          },
          {
            queueType: 'RANKED_FLEX_SR',
            tier: 'DIAMOND',
            rank: 'I'
          }
        ]
      });
  });
})

afterEach(() => {    
  jest.clearAllMocks();
});