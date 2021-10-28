import { Redis } from 'libs/db/redis';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>().use( async (req, res, next) => {
    const redis = new Redis()
    const reqDate = await redis.getReqDate()

    if(reqDate <= 0) {
        await redis.setReqDate(new Date().getTime())
        await redis.close()
        next()
        return
    }

    const today = new Date().getTime()
    const twoMins = addMinutes(reqDate, 2).getTime()

    if(today < twoMins){
        const rest =  twoMins - today
        const remaining = `${new Date(rest).getMinutes()} minutes ${new Date(rest).getSeconds()} seconds`
        await redis.close()
        res.status(429).end(`on cooldown (${remaining} remaining)`);
    } else {
        await redis.setReqDate(new Date().getTime())
        await redis.close()
        next()
    }
})

const addMinutes = (dt: number, minutes: number) => new Date(new Date(dt).getTime() + minutes*60000);

  export default function base() { 
     return nc().use(handler) 
  }