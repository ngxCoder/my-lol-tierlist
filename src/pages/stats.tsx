import { MainContainer } from '@components/MainContainer'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'



const Stats = () => {

  const router = useRouter()

  return (
    <MainContainer>

    </MainContainer>
)}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query

    let { region, summoner } = query

    if(Array.isArray(region)){
        region = region[0]
    }

    if(Array.isArray(summoner)){
        summoner = summoner[0]
    }
    
    return {
        props: {}
    }
}

export default Stats
