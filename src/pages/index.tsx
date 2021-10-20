import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, VStack } from '@chakra-ui/react'
import { FAQ } from '@components/FAQ'
import { Header } from '@components/Header'
import { Hero } from '@components/Hero'
import { Main } from '@components/Main'
import { SearchBar } from '@components/SearchBar'
const Index = () => (
  <>
    <Header/>
    <Main>
      <VStack spacing={8}>
        <Hero title="My LOL Tierlist" />
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
        ]}/>
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
    </Main>
  </>
)

export default Index
