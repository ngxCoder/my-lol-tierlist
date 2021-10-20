import { StackProps, VStack } from '@chakra-ui/react'
import { Children } from 'react'
import { Container } from './Container'

export const Main = (props: StackProps) => (
  <VStack
  spacing={0}
  align="stretch">
    {
      Children.map(props.children, child => (
        <Container height="100vh">
          { child }
        </Container>
      ))
    }
  </VStack>
)
