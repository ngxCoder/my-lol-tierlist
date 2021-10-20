import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

export const FAQ = (props: FAQProps) => (
    <Box width="60vw" height="70%">
        <Accordion allowToggle defaultIndex={0} bg="blue.800" borderRadius="0.375rem">
            {
                props.data.map((faq, idx, arr) => (
                    <AccordionItem key={idx}>
                        <h2>
                            <AccordionButton>
                            <Box flex="1" textAlign="left">
                                {faq.title}
                            </Box>
                            <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} bg="white" color="black" 
                        borderBottomRadius={arr.length - 1 === idx ?  "0.375rem" : "none"}>
                            {faq.content}
                        </AccordionPanel>
                    </AccordionItem>
                ))
            }
        </Accordion>
    </Box>
)

FAQ.defaultProps = {
    data: []
}

export interface FAQProps {
    data: {
        title: string,
        content: string
    }[]
}