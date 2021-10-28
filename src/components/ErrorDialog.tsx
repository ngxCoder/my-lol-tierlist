import { Box, Heading } from "@chakra-ui/react";

export const ErrorDialog = ({ message }: { message?: string }) => {
    return (
        <Box bg="white" color="blue.800" borderRadius="0.375rem" padding="2.375rem">
            <Heading>{message ? message.substring(0, 50) + "..." : 'Unexpected Error :('}</Heading>
        </Box>
    )
}
