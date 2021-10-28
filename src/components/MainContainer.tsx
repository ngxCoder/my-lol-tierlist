import { StackProps, VStack } from '@chakra-ui/react'
import { Children } from 'react'
import { Container } from './Container'

export const MainContainer = (props: StackProps) => (
  <VStack
  spacing={0}
  align="stretch">
    {
      Children.map(props.children, child => (
        <Container  minHeight="100vh" paddingY="80px">
          { child }
        </Container>
      ))
    }
  </VStack>
)
