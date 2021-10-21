import { MainContainer } from '@components/MainContainer'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GetServerSideProps } from 'next'



const Stats = () => {

  const router = useRouter()

  return (
    <MainContainer>

    </MainContainer>
)}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query

    console.log(query)
    const { region, summoner } = query

    
    return {
        props: {}
    }
}

export default Stats
