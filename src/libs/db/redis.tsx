import { createNodeRedisClient, WrappedNodeRedisClient } from 'handy-redis';

export class Redis {

    private client: WrappedNodeRedisClient;

    constructor() {
        this.client = createNodeRedisClient({
            host: process.env.REDIS_HOSTNAME,
            port: +process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD
        });
    }

    setReqDate(date: number) {
        return this.client.set('reqDate', `${date}`)
    }

    async getReqDate() {
        return +(await this.client.get('reqDate'))
    }
}