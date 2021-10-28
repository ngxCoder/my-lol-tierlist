import { Box, Heading } from "@chakra-ui/react";

export const ErrorDialog = ({ message }: { message?: string }) => (
            <Box bg="white" color="blue.800" borderRadius="0.375rem" padding="2.375rem">
                <Heading>{message ? message : 'Unexpected Error :('}</Heading>
            </Box>
)
