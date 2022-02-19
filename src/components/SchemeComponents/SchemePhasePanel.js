import {Badge, Box, ButtonGroup, Divider, Grid, GridItem, IconButton, Progress, VStack} from '@chakra-ui/react';
import {GiFlyingFlag, GiUpgrade} from 'react-icons/gi';
import {useDispatch} from 'react-redux';
import currentGame from '../../model/store/currentGame';
import {SchemeState} from '../../model/Scheme';
import Machinate from './Machinate';
import Thwart from './Thwart';


const threatColor = (percentage) => {
    if (percentage < 0.2) {
        return 'green';
    } else if (percentage < 0.5) {
        return 'yellow';
    } else if (percentage < 0.75) {
        return 'orange';
    } else {
        return 'red';
    }
}


//TODO posible mejora -> traspasar aumentos de un villainID a otro
const SchemePhasePanel = ({z, sp}) => {

    const effectiveMaxThreat = sp.getMaxThreat();
    const imageOpacity = sp.state === SchemeState.ACTIVE ? '100%':'50%'
    const progressColor = threatColor(sp.threat/effectiveMaxThreat);
    const dispatch = useDispatch();

    const runVillainPhase = () => {
        dispatch(currentGame.actions.runVillainPhase(z,sp.id));
    }

    const thwart = num => {
        dispatch(currentGame.actions.thwartScheme(z,sp.id,num));
    }

    const machinate = num => {
        dispatch(currentGame.actions.machinateScheme(z,sp.id,num));
    }

    if (!sp) {
        return null;
    }

    return (
        <Box>
            <VStack spacing={2} width='full' alignItems='end'>
                <Progress colorScheme={progressColor} width='full' size='md' height={'2rem'} value={sp.threat} rounded={'md'} max={effectiveMaxThreat} isAnimated={true} opacity={imageOpacity}/>
                <Badge variant={'solid'} display={'inline-flex'} colorScheme={'gray'} textColor={'white'}
                       fontSize={'1rem'} fontWeight={'bold'} fontFamily={'Roboto'}>
                    {sp.threat}/{effectiveMaxThreat}
                </Badge>
            </VStack>
            <Grid>
                <GridItem mx={'auto'}>
                    <ButtonGroup pr={2} mr={2} borderRight={'2px'} borderColor={'gray.300'}>
                        <Thwart action={thwart}/>
                        <Machinate action={machinate}/>
                    </ButtonGroup>
                    <ButtonGroup>
                        <IconButton icon={<GiFlyingFlag fontSize={'1.5rem'}/>}
                                    onClick={runVillainPhase}/>
                        <IconButton icon={<GiUpgrade fontSize={'1.5rem'}/>}/>
                    </ButtonGroup>
                </GridItem>
            </Grid>

        </Box>
    );

}

export default SchemePhasePanel;
