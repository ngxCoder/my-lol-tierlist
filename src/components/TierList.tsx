import { Box, Heading, List, ListItem, Text, VStack} from '@chakra-ui/react'
import { ChampStat } from './ChampStat'

export const ChampStatsList = ({title, subtitle, champStats, limit, synergy, dysergy }: {title: string, subtitle: string, champStats: ChampStat[], limit?: number, synergy?: boolean, dysergy?: boolean}) => {

    const stats = champStats ? champStats.slice(0, limit ? limit : 10) : []

    stats
    .map(stat => { 
        let champ = stat.champ
        if(champ === 'FiddleSticks') champ = 'Fiddlesticks'
        return { ...stat, champ }
    })

    console.log(synergy, dysergy)
    return (
    <Box bg="white" color="blue.800" borderRadius="0.375rem" padding="1rem">
        <VStack
        spacing={4}
        >
            <Heading textColor={synergy ? "green.600" : dysergy ? "red.600" : ""} >{title}</Heading>
            <Text margin={0} fontSize="sm">{subtitle}</Text>
            <List marginTop={5} spacing={3}>
                {
                    stats ? stats.map((stat: ChampStat, idx) => (
                        <ListItem key={idx}>
                            <ChampStat {...stat}/>
                        </ListItem>
                    )) : ''
                }
            </List>
        </VStack>
    </Box>
)}
