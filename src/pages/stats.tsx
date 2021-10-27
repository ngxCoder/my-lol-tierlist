import { MainContainer } from '@components/MainContainer'
import { useRouter } from 'next/router'
import { GetServerSideProps} from 'next'
import { TierList } from '@components/TierList'
import absoluteUrl from 'next-absolute-url'
import axios from 'axios'



const Stats = ({ stats }) => {

  const router = useRouter()

  return (
    <MainContainer>
        <TierList champStats={stats}></TierList>
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
        console.error(error)
    } 


        return {
            props: {
                 stats: champStats
            }
        }
}

export default Stats
