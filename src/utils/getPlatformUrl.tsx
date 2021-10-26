import mapRegion from './mapRegion'

const getPlatformUrl = (region: string) => {
    const platform = mapRegion(region).platform
    return `https://${platform}.api.riotgames.com`
}

export default getPlatformUrl