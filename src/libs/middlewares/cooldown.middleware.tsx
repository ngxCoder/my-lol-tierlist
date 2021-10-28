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
        res.status(500).end('on cooldown');
    } else {
        lowDB.setReqDate(new Date().getTime())
        next()
    }
})

const addMinutes = (dt: number, minutes: number) => new Date(new Date(dt).getTime() + minutes*60000);

  export default nc().use(handler)