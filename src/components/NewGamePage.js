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
import {gameImageSelector, GamesEnum, GamesModeEnum, generateGame} from '../model/Game';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import currentGame from '../model/store/currentGame';
import {useHistory} from 'react-router-dom';

const games = Object.values(GamesEnum);

const NewGamePage = () => {

    const [game, setGame] = useState(GamesEnum.RHINO);
    const [mode, setMode] = useState();
    const [numPlayers, setNumPlayers] = useState(1);

    const history = useHistory();
    const dispatch = useDispatch();

    const generateNewGame = () => {

        const {villainZone1, villainZone2, environmentZone1} = generateGame(game, mode, numPlayers);

        dispatch(currentGame.actions.initVillainZone( 1, villainZone1));
        dispatch(currentGame.actions.initVillainZone(2, villainZone2));
        dispatch(currentGame.actions.initEnvironmentZone(1, environmentZone1));

        history.push('/game');
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={1} px={5}>
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
                        <Image w={'md'} rounded={'lg'} src={gameImageSelector(game)}/>
                        <FormControl >
                            <FormLabel>Escenario</FormLabel>
                            <AutoComplete openOnFocus suggestWhenEmpty={true} value={game} onChange={value => setGame(value)} defaultValue={game}>
                                <AutoCompleteInput variant="outline"/>
                                <AutoCompleteList>
                                    {games.map((game, cid) => (
                                        <AutoCompleteItem
                                            key={`option-${cid}`}
                                            value={game}
                                            textTransform="capitalize"
                                        >
                                            {game}
                                        </AutoCompleteItem>
                                    ))}
                                </AutoCompleteList>
                            </AutoComplete>
                        </FormControl>
                        <FormControl id="mode">
                            <FormLabel>Modo</FormLabel>
                            <Select variant='outline' value={mode} onChange={e => setMode(e.target.value)}>
                                <option value={GamesModeEnum.NORMAL}>{GamesModeEnum.NORMAL}</option>
                                <option value={GamesModeEnum.EXPERT}>{GamesModeEnum.EXPERT}</option>
                            </Select>
                        </FormControl>
                        <FormControl id="players">
                            <FormLabel>Núm. jugadores</FormLabel>
                            <Select variant='outline' value={numPlayers} onChange={e => setNumPlayers(Number(e.target.value))}>
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
                                _hover={{bg: 'red.500',}}
                                _active={{bg: 'red.700',}}
                                onClick={generateNewGame}>
                                Empezar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default NewGamePage;
