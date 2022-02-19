import {
    Badge,
    Box,
    ButtonGroup,
    Divider,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Progress,
    Spacer,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    VStack
} from '@chakra-ui/react';
import {GiFlyingFlag} from 'react-icons/gi';
import {useDispatch} from 'react-redux';
import currentGame from '../../model/store/currentGame';
import {SchemeExtensionEnum, SchemeState} from '../../model/Scheme';
import Machinate from './Machinate';
import Thwart from './Thwart';
import AddExtension from './AddExtension';
import {Fragment} from 'react';


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

const extensionContent = (extension) => {

    switch (extension.type) {
        case SchemeExtensionEnum.MAX_THR:
            return (<Text> +{extension.quantity} límite</Text>);
        case SchemeExtensionEnum.EXTRA_PHASE_THR:
            return (<Text> +{extension.quantity} × fase</Text>);
        default:
            return null;
    }

}

//TODO posible mejora -> traspasar aumentos de un villainID a otro
const SchemePhasePanel = ({z, sp}) => {

    const effectiveMaxThreat = sp.getMaxThreat();
    const effectivePhaseThreat = sp.getPhaseIncrement();
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

    const addMaxTHRExtension = num => {
        dispatch(currentGame.actions.addSchemeMaxTHRExtension(z,sp.id,num));
    }

    const addExtraPhaseTHRExtension = num => {
        dispatch(currentGame.actions.addSchemeExtraPhaseTHRExtension(z,sp.id,num));
    }

    const removeExtension = extension => {
        dispatch(currentGame.actions.removeSchemeExtension(z,sp.id,extension));
    }

    if (!sp) {
        return null;
    }

    return (
        <Box>
            <VStack spacing={2} width='full'>
                <Progress colorScheme={progressColor} width='full' size='md' height={'2rem'} value={sp.threat} rounded={'md'} max={effectiveMaxThreat} isAnimated={true} opacity={imageOpacity}/>
                <Flex width={'full'}>
                    <Tag size={'md'} variant='solid' colorScheme='teal'>
                        +{effectivePhaseThreat}&nbsp;<GiFlyingFlag fontSize={'1rem'}/>
                    </Tag>
                    <Spacer />
                    <Badge variant={'solid'} display={'inline-flex'} colorScheme={'gray'} textColor={'white'}
                           fontSize={'1rem'} fontWeight={'bold'} fontFamily={'Roboto'}>
                        {sp.threat}/{effectiveMaxThreat}
                    </Badge>
                </Flex>
            </VStack>
            <Grid mt={2}>
                <GridItem mx={'auto'}>
                    <ButtonGroup pr={2} mr={2} borderRight={'2px'} borderColor={'gray.300'}>
                        <Thwart action={thwart}/>
                        <Machinate action={machinate}/>
                    </ButtonGroup>
                    <ButtonGroup>
                        <IconButton icon={<GiFlyingFlag fontSize={'1.5rem'}/>} onClick={runVillainPhase}/>
                        <AddExtension actionMaxTHR={addMaxTHRExtension} actionExtraPhaseTHR={addExtraPhaseTHRExtension}/>
                    </ButtonGroup>
                </GridItem>
            </Grid>
            {sp.extensions.length > 0 &&
                <Fragment>
                    <Divider mt={2}/>
                    <Box spacing={2} pt={1}>
                        {sp.extensions.map((ext, i) => (
                            <Tag size={'m'} key={i} py={1} px={2} m={1} borderRadius='full'
                                 variant='solid' colorScheme='purple'>
                                <TagLabel>{extensionContent(ext)}</TagLabel>
                                <TagCloseButton onClick={() => removeExtension(ext)}/>
                            </Tag>
                        ))}
                    </Box>
                </Fragment>}
        </Box>
    );

}

export default SchemePhasePanel;
