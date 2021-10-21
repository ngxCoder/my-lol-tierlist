import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
  >
    <Heading role="heading" fontSize={{ base: "10vw", md: "6vw" }} textShadow="0px 3px 3px #2B6CB0">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: '',
}
