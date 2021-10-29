import { SearchIcon } from '@chakra-ui/icons';
import { FormControl, Input, Select, Button, Flex } from '@chakra-ui/react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const SearchBar = (props: SearchBarProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: props.default
  });

  return (
  <form onSubmit={handleSubmit(props.onSubmit)}>
    <Flex width="60vw" wrap={{ base: "wrap", md: "nowrap"}}>

      <FormControl id="region" w={{ base: "100%",md: "8rem" }}>
        <Select 
        data-testid="region"
        size="lg" 
        borderRightRadius={{ base: "0.375rem", md: "none" }} 
        bg="blue.800"
        textAlign="center"
        {...register("region")}
        >
          {
            props.regions.map((region, idx) => (
              <option key={idx} value={region.value}>{region.label}</option>
            ))
          }
        </Select>
      </FormControl>

      <FormControl id="summoner">
        <Input 
        data-testid="summoner"
        placeholder="Your Summoner Name"
        _placeholder={{color: "gray" }}
        size="lg" 
        variant="outline" 
        borderRadius={{ base: "0.375rem" ,md: "none" }}
        pl="1rem"
        zIndex="0"
        maxLength={50}
        color="black"
        my={{ base: "1rem",md: "0" }}
        bg="white" 
        {...register("summoner")} />
      </FormControl>

      <Button
      type="submit"
      bg="blue.800" 
      size="lg"
      isLoading={props.isLoading}
      w={{ base: "100%", md: "unset" }}
      borderLeftRadius={{ base: "0.375rem", md: "none" }} 
      _hover={{ bg: "blue.600" }} 
      rightIcon={<SearchIcon />}>
        Buscar
      </Button>
        
    </Flex>
  </form>
  )
}

SearchBar.defaultProps = {
  regions: []
}

export interface SearchBarProps {
  regions: {
    label: string,
    value: string
  }[],
  default: {
    region: string,
    summoner: string
  },
  onSubmit: (data: any) => void,
  isLoading: boolean
}


