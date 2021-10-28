import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Box, Heading, Spacer, useColorMode, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link'

export const Header = () => {

    const { pathname } = useRouter()
    
    const isHome = pathname === '/'

    return (

        <Flex 
        as="header" 
        position="fixed"
        width="100%"
        boxShadow="lg"
        zIndex="1"
        bg="gray.800"
        color="white"
        >
            {
                 isHome ? '' : (
                <Box px="2" py="5">
                    <NextLink href="/">
                        <Heading data-testid="home" size="md" sx={{ cursor: 'pointer' }}>
                            My LOL Tier List
                        </Heading>
                    </NextLink>
                </Box>
                 )
            }
            <Spacer />
            <Box px="2" py="5">
                <Link href="https://ngxcoder.dev/">
                    <Heading data-testid="ngxCoder" size="md">
                        by ngxCoder <ExternalLinkIcon/>
                    </Heading>
                </Link>
            </Box>
        </Flex>
    )
}