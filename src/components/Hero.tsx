import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
  >
    <Heading fontSize={{ base: "10vw", md: "6vw" }}>{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: '',
}
