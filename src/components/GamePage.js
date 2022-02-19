import {useSelector} from 'react-redux';
import currentGame from '../model/store/currentGame';
import VillainZone from './VillainZone';
import {Box, Flex, Grid, GridItem, Stack, useColorModeValue} from '@chakra-ui/react';
import EnvironmentZone from './EnvironmentZone';

const GamePage = () => {

    const villain1 = useSelector(currentGame.selectors.getVillain1);
    const villain2 = useSelector(currentGame.selectors.getVillain2);
    const scheme1 = useSelector(currentGame.selectors.getScheme1);
    const scheme2 = useSelector(currentGame.selectors.getScheme2);
    const environment1 = useSelector(currentGame.selectors.environment1);
    const bgColorPage = useColorModeValue('gray.50', 'gray.800');
    const bgColorContent = useColorModeValue('white', 'gray.700')

    if (!villain1) {
        return null;
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={bgColorPage}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={5} width={'full'}>
                <Box bg={bgColorContent} rounded={'lg'}
                     boxShadow={'lg'}>
                    <Grid rounded={'md'} >
                        <GridItem><VillainZone zone={1} villain={villain1} scheme={scheme1}/></GridItem>
                        { villain2 && <GridItem><VillainZone zone={2} villain={villain2} scheme={scheme2}/></GridItem>}
                        { environment1 && <GridItem><EnvironmentZone zone={1} environment={environment1}/></GridItem>}
                    </Grid>
                </Box>
            </Stack>
        </Flex>
    );

}

export default GamePage;

