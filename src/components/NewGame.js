import './App.css';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Select,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import {AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList} from "@choc-ui/chakra-autocomplete";
import marvel from '../assets/marvel.svg';
import Rino from '../assets/Rhino.jpg'

const villains = [
    "Rino",
    "Klaw",
    "Ultron",
    "Fauces Negras",
];

const NewGame = () => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <HStack><Image width={'9rem'} src={marvel}/><Text fontSize="x-large" fontWeight="bold" as="i" >CHAMPIONS</Text></HStack>
                    <Text fontSize={'xl'} fontWeight="bold" fontFamily={'courier'} color={'gray.700'}>
                        Virtual Villains
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <Image w={'2xs'} rounded={'lg'} src={Rino}/>
                        <FormControl >
                            <FormLabel>Villano</FormLabel>
                            <AutoComplete openOnFocus suggestWhenEmpty={true}>
                                <AutoCompleteInput variant="outline" />
                                <AutoCompleteList>
                                    {villains.map((villain, cid) => (
                                        <AutoCompleteItem
                                            key={`option-${cid}`}
                                            value={villain}
                                            textTransform="capitalize"
                                        >
                                            {villain}
                                        </AutoCompleteItem>
                                    ))}
                                </AutoCompleteList>
                            </AutoComplete>
                        </FormControl>
                        <FormControl id="mode">
                            <FormLabel>Modo</FormLabel>
                            <Select variant='outline'>
                                <option value="normal">Normal</option>
                                <option value="expert">Experto</option>
                            </Select>
                        </FormControl>
                        <FormControl id="players">
                            <FormLabel>Núm. jugadores</FormLabel>
                            <Select variant='outline'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Select>
                        </FormControl>
                        <Stack spacing={10}>
                            <Box/>
                            <Button
                                bg={'red.400'} color={'white'}
                                _hover={{bg: 'red.500',
                                }}>
                                Empezar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default NewGame;
