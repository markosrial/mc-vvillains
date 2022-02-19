import {
    Badge,
    Box,
    ButtonGroup,
    Divider,
    Grid,
    GridItem,
    HStack,
    Image,
    Progress,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
    VStack
} from '@chakra-ui/react';
import {VillainExtensionEnum, VillainState} from '../../model/Villains';
import Hit from './Hit';
import Heal from './Heal';
import {useDispatch} from 'react-redux';
import currentGame from '../../model/store/currentGame';
import {Fragment} from 'react';
import AddExtension from './AddExtension';

const hpColor = (percentage) => {
    if (percentage > 0.5) {
        return 'teal';
    } else if (percentage > 0.25) {
        return 'orange';
    } else {
        return 'red';
    }
}

const extensionContent = (extension) => {

    switch (extension.type) {
        case VillainExtensionEnum.MAX_HP:
            return (<Text> +{extension.quantity} HP</Text>);
        default:
            return null;
    }

}

//TODO posible mejora -> traspasar aumentos de un villainID a otro
const VillainPhasePanel = ({z, vp}) => {

    const effectiveMaxHP = vp.getMaxHP();
    const imageOpacity = vp.state === VillainState.ACTIVE ? '100%':'50%'
    const progressColor = hpColor(vp.hp/effectiveMaxHP);
    const dispatch = useDispatch();

    const attack = num => {
        dispatch(currentGame.actions.hitVillain(z,vp.id,num));
    }

    const heal = num => {
        dispatch(currentGame.actions.healVillain(z,vp.id,num));
    }

    const addMaxHPExtension = num => {
        dispatch(currentGame.actions.addVillainMaxHPExtension(z,vp.id,num));
    }

    const removeExtension = extension => {
        dispatch(currentGame.actions.removeVillainExtension(z,vp.id,extension));
    }

    if (!vp) {
        return null;
    }

    return (
        <Box>
            <HStack maxH={'4rem'} mb={'1rem'}>
                <Image src={vp.image} h={'5rem'} borderRadius='md' opacity={imageOpacity}/>
                <VStack spacing={2} width='full' alignItems='end'>
                    <Progress colorScheme={progressColor} width='full' size='md' height={'2rem'} value={vp.hp} rounded={'md'} max={effectiveMaxHP} isAnimated={true}/>
                    <Badge variant={'solid'} display={'inline-flex'} colorScheme={'gray'} textColor={'white'}
                           fontSize={'1rem'} fontWeight={'bold'} fontFamily={'Roboto'}>
                        {vp.hp}/{effectiveMaxHP}
                    </Badge>
                </VStack>
            </HStack>
            <Grid>
                <GridItem mx={'auto'}>
                    <ButtonGroup pr={2} mr={2} borderRight={'2px'} borderColor={'gray.300'}>
                        <Hit action={attack}/>
                        <Heal action={heal}/>
                    </ButtonGroup>
                    <ButtonGroup>
                        <AddExtension action={addMaxHPExtension}/>
                    </ButtonGroup>
                </GridItem>
            </Grid>
            {vp.extensions.length > 0 &&
                <Fragment>
                    <Divider mt={2}/>
                    <Box spacing={2} pt={1}>
                        {vp.extensions.map((ext, i) => (
                            <Tag size={'m'} key={i} py={1} px={2} m={1} borderRadius='full'
                                 variant='solid' colorScheme='blue'>
                                <TagLabel>{extensionContent(ext)}</TagLabel>
                                <TagCloseButton onClick={() => removeExtension(ext)}/>
                            </Tag>
                        ))}
                    </Box>
                </Fragment>}
        </Box>
    );

}

export default VillainPhasePanel;
