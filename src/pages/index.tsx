import { VStack } from '@chakra-ui/react'
import { FAQ } from '@components/FAQ'
import { Hero } from '@components/Hero'
import { MainContainer } from '@components/MainContainer'
import { SearchBar } from '@components/SearchBar'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { regions } from 'utils/mapRegion'



const Index = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const onSubmit = (data: any) => {
    const { region, summoner } = data;
    setLoading(true)
    router.push({ 
      pathname: '/stats',
      query: { region, summoner }
    })
  }

  const regionsOptions = Object.keys(regions).map(region => ({ label: region, value: region }))

  return (
  <>
    <MainContainer>
      <VStack spacing={8}>
        <Hero title="My LoL Tier List" />
        <SearchBar 
        regions={regionsOptions}
        default={{
            region: 'LAN',
            summoner: ''
        }}
        onSubmit={onSubmit}
        isLoading={loading}
        />
      </VStack>
      <FAQ
      data={[
        {
          title: 'How it works?',
          content: 'It collects your stats and analyzes it. (TODO)'
        },
        {
          title: 'Why it has 2 minutes cooldown?',
          content: 'Riot Games  (where I collect your stats) has a solution to protect themselves against the malicious developers called Rate Limit. If I exceed the 100 requests in 2 minutes, I will get a 429 error (TODO)'
        }
      ]}
      />
    </MainContainer>
  </>
)}

export default Index
