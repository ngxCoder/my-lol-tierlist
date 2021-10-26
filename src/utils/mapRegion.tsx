const mapRegion = (region: string) => {
    const result = regions[region]
    if(result){
        return result
    } else {
        throw new Error('Region Mapping Error');
    }
}

export const regions = {
    NA: { platform: 'na1', region: 'americas' }, 
    BR: { platform: 'br1', region: 'americas' }, 
    LAN: { platform: 'la1', region: 'americas' }, 
    LAS: { platform: 'la2', region: 'americas' }, 
    OCE: { platform: 'oc1', region: 'americas' }, 
    KR: { platform: 'kr', region: 'asia' }, 
    JP: { platform: 'jp1', region: 'asia' }, 
    EUNE: { platform: 'eun1', region: 'europe' },  
    EUW: { platform: 'euw1', region: 'europe' },   
    TR: { platform: 'tr1', region: 'europe' },  
    RU: { platform: 'ru', region: 'europe' },
}

export default mapRegion