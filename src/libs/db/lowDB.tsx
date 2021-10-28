import { LowSync, JSONFileSync } from 'lowdb'


export class LowDB {

    private db: LowSync<Data>;

    constructor() {

        // Use JSON file for storage
        const file = './db.json'
        const adapter = new JSONFileSync<Data>(file)
        this.db = new LowSync<Data>(adapter)
    }

    setReqDate(date: number) {
        this.db.data = { reqDate: date }
        this.db.write()
    }

    getReqDate() {
        this.db.read()
        const data = this.db.data ?? { reqDate: 0 }
        return data.reqDate
    }
}

export type Data = {
    reqDate: number
}