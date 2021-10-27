import { Avatar, Box, Divider, Flex, Heading, HStack, List, ListItem, Progress, SimpleGrid, Spacer, StackDivider, VStack} from '@chakra-ui/react'
import { ChampStat } from './ChampStat'

export const TierList = ({champStats}: {champStats: ChampStat[]}) => {
    const stats = champStats
    .slice(0, 10)
    .map(stat => { 
        let champ = stat.champ
        if(champ === 'FiddleSticks') champ = 'Fiddlesticks'
        return { ...stat, champ }
    })

    return (
    <Box bg="white" color="blue.800" borderRadius="0.375rem" padding="0.375rem">
        <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        >
            <Heading>My LOL Tier List</Heading>
            <List spacing={3}>
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
