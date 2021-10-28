import { MainContainer } from '@components/MainContainer'
import { useRouter } from 'next/router'
import { GetServerSideProps} from 'next'
import { TierList } from '@components/TierList'
import absoluteUrl from 'next-absolute-url'
import axios, { AxiosError } from 'axios'
import { HStack, VStack } from '@chakra-ui/react'
import { ErrorDialog } from '@components/ErrorDialog'


const Stats = ({ stats, statusCode, message }: StatsPageProps) => {
  return (
    <MainContainer>
        {
            stats ? (
                <HStack spacing="10px">
                    <TierList champStats={stats}></TierList>
                    <VStack spacing="10px">
                        
                    </VStack>
                </HStack>): (
                <ErrorDialog message={message}/>
                )
        }
    </MainContainer>
)}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res, query } = context

    let { region, summoner } = query

    if(Array.isArray(region)){
        region = region[0]
    }

    if(Array.isArray(summoner)){
        summoner = summoner[0]
    }

    const { origin } = absoluteUrl(req)

    let champStats = null;

    try {

        const response = await axios.get<any>(`${origin}/api/stats`, {
            params: {
                region,
                summoner,
                count: 95,
                type: 'ranked'
            }
        })

        champStats = response.data.champStats

    } catch (error) {
        const err = error as AxiosError
        return {
            props: {
                statusCode: err.response.status,
                message: err.response.data
            }
        }
    } 


        return {
            props: {
                 stats: champStats
            }
        }
}

export default Stats

export interface StatsPageProps {
    statusCode?: number,
    message?: string,
    stats?: ChampStat[]
}
