import { LowDB } from 'libs/db/lowDB';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>().use((req, res, next) => {
    const lowDB = new LowDB()
    const reqDate = lowDB.getReqDate()

    if(reqDate <= 0) {
        lowDB.setReqDate(new Date().getTime())
        next()
    }

    const today = new Date().getTime()
    const twoMins = addMinutes(reqDate, 2).getTime()

    if(today < twoMins){
        const rest =  twoMins - today
        const remaining = `${new Date(rest).getMinutes()} minutes ${new Date(rest).getSeconds()} seconds`
        res.status(429).end(`on cooldown (${remaining} remaining)`);
    } else {
        lowDB.setReqDate(new Date().getTime())
        next()
    }
})

const addMinutes = (dt: number, minutes: number) => new Date(new Date(dt).getTime() + minutes*60000);

  export default function base() { 
     return nc().use(handler) 
  }