import { join, dirname } from 'path'
import { LowSync, JSONFileSync } from 'lowdb'
import { fileURLToPath } from 'url'


export class LowDB {

    private db: LowSync<Data>;

    constructor() {
        const __dirname = dirname(fileURLToPath(import.meta.url));

        // Use JSON file for storage
        const file = join(__dirname, 'db.json') || join(__dirname, 'db.json.tmp')
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