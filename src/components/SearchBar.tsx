import { SearchIcon } from '@chakra-ui/icons';
import { FormControl, Input, Select, Button, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export const SearchBar = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      region: 'la1',
      summoner: ''
    }
  });

  function onSubmit(data) {
    alert(JSON.stringify(data))
  }
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Flex width="60vw" wrap={{ base: "wrap", md: "nowrap"}}>

      <FormControl id="region" w={{ base: "100%",md: "7rem" }}>
        <Select 
        size="lg" 
        borderRightRadius={{ base: "0.375rem", md: "none" }} 
        bg="blue.800"
        {...register("region")}
        >
          {
            [
              {label: 'BR', value: 'br1'},
              {label: 'EUNE', value: 'eun1'},
              {label: 'EUW', value: 'euw1'},
              {label: 'JP', value: 'jp1'},
              {label: 'KR', value: 'kr'},
              {label: 'LAN', value: 'la1'},
              {label: 'LAS', value: 'la2'},
              {label: 'NA', value: 'na1'},
              {label: 'OCE', value: 'oc1'},
              {label: 'TR', value: 'tr1'},
              {label: 'RU', value: 'RU1'},
            ].map((region, idx) => (
              <option key={idx} value={region.value}>{region.label}</option>
            ))
          }
        </Select>
      </FormControl>

      <FormControl id="summoner">
        <Input 
        placeholder="Your Summoner Name"
        _placeholder={{color: "gray" }}
        size="lg" 
        variant="outline" 
        borderRadius={{ base: "0.375rem" ,md: "none" }}
        pl="1rem"
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
}


