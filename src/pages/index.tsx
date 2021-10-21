import { VStack } from '@chakra-ui/react'
import { FAQ } from '@components/FAQ'
import { Hero } from '@components/Hero'
import { MainContainer } from '@components/MainContainer'
import { SearchBar } from '@components/SearchBar'
import { useRouter } from 'next/router'



const Index = () => {
  const router = useRouter()

  const onSubmit = (data: any) => {
    const { region, summoner } = data;
    router.push({ 
      pathname: '/',
      query: { region, summoner }
    })
  }

  return (
  <>
    <MainContainer>
      <VStack spacing={8}>
        <Hero title="My LoL Tier List" />
        <SearchBar regions={[
          {label: 'BR', value: 'br1'},
          {label: 'EUNE', value: 'eun1'},
          {label: 'EUW', value: 'euw1'},
          {label: 'JP', value: 'jp1'},
          {label: 'KR', value: 'kr'},
          {label: 'LAN', value: 'la1'},
          {label: 'LAS', value: 'la2'},
          {label: 'NA', value: 'na1'},
          {label: 'OCE', value: 'oc1'},
          {label: 'TR', value: 'tr1'},
          {label: 'RU', value: 'RU1'},
        ]}
        onSubmit={onSubmit}
        />
      </VStack>
      <FAQ
      data={[
        {
          title: 'How it works?',
          content: 'It collects your stats and analyzes it.'
        },
        {
          title: 'Why it has 2 minutes cooldown?',
          content: 'Riot Games  (where I collect your stats) has a solution to protect themselves against the malicious developers called Rate Limit. If I exceed the 100 requests in 2 minutes, I will get a 429 error'
        }
      ]}
      />
    </MainContainer>
  </>
)}

export default Index
