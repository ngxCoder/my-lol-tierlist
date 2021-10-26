import mapRegion from './mapRegion'

const getRegionUrl = (region: string) => {
    const regionMapped = mapRegion(region).region
    return `https://${regionMapped}.api.riotgames.com`
}

export default getRegionUrl