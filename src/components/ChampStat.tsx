import { Avatar, Heading, HStack, Progress, SimpleGrid } from "@chakra-ui/react";

export const ChampStat = ({ champ, win, lose, total, percentage }: ChampStat) => (
    <SimpleGrid columns={3} spacing={10} height="2.3rem" alignItems="center" >
        <HStack spacing={3}>
            <Avatar name={champ} size="sm" src={`http://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/${ champ ? champ : ''}.png`} />
            <Heading size="md">{champ}</Heading>
        </HStack>
        <Progress value={percentage} hasStripe colorScheme="facebook" size="md" bg="blackAlpha.200" />
        <Heading size="sm">{win || lose}/{total} ({percentage}%)</Heading>
    </SimpleGrid>
)