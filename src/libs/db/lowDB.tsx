import { join, dirname } from 'path'
import { LowSync, JSONFileSync } from 'lowdb'
import { fileURLToPath } from 'url'


export class LowDB {

    db: LowSync<Data>;

    constructor() {
        const __dirname = dirname(fileURLToPath(import.meta.url));

        // Use JSON file for storage
        const file = join(__dirname, 'db.json')
        const adapter = new JSONFileSync<Data>(file)
        this.db = new LowSync<Data>(adapter)
    }

    setReqDate(date: Date) { 
        this.db.data.reqDate = date
        this.db.write()
    }

    getReqDate() {
        this.db.read()
        return this.db.data ?? { reqDate: undefined }
    }
}

export type Data = {
    reqDate: Date
}