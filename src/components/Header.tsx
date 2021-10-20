import { Flex, Box, Heading, Spacer, useColorMode } from '@chakra-ui/react'

export const Header = () => {
    const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.800' }

  const color = { light: 'black', dark: 'white' }
    return (

        <Flex 
        as="header" 
        position="fixed"
        width="100%"
        boxShadow="lg"
        zIndex="1"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        >
            <Spacer />
            <Box px="2" py="5">
                <Heading size="md">by ngxCoder</Heading>
            </Box>
        </Flex>
    )
}