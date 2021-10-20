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
        <SearchBar/>
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
