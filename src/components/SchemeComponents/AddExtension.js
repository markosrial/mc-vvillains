import {
    Box,
    Button,
    Grid,
    IconButton,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger
} from '@chakra-ui/react';
import {GiUpgrade} from 'react-icons/gi';
import {FiCheck} from 'react-icons/fi';
import {useState} from 'react';


const AddExtension = ({actionMaxTHR, actionExtraPhaseTHR}) => {

    const [maxThreat, setMaxThreat] = useState(1);
    const [extraPhaseThreat, setExtraPhaseThreat] = useState(1);

    const addMaxThreatExtension = () => {
        actionMaxTHR(maxThreat);
        clearValues();
    }

    const addExtraPhaseThreatExtension = () => {
        actionExtraPhaseTHR(extraPhaseThreat);
        clearValues();
    }

    const clearValues = () => {
        setMaxThreat(1);
        setExtraPhaseThreat(1);
    }

    return (
        <Popover>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <IconButton icon={<GiUpgrade fontSize={'1.5rem'}/>}/>
                    </PopoverTrigger>
                    <PopoverContent width={'4xs'} >
                        <PopoverArrow />
                        <PopoverBody>
                            <Grid>
                                <Box display={'inline-flex'}>
                                    <Box>
                                        <NumberInput value={maxThreat} min={0} onChange={e => setMaxThreat(Number(e))} size='md' maxW={20}>
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Box>
                                    <Button ml={1} size={'md'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                            onClick={() => {onClose(); addMaxThreatExtension();}}>
                                        Amenaza (máx)
                                    </Button>
                                </Box>
                                <Box display={'inline-flex'} mt={2}>
                                    <Box>
                                        <NumberInput value={extraPhaseThreat} min={0} onChange={e => setExtraPhaseThreat(Number(e))} size='md' maxW={20}>
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Box>
                                    <Button ml={1} size={'md'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                            onClick={() => {onClose(); addExtraPhaseThreatExtension();}}>
                                        Amenaza × fase
                                    </Button>
                                </Box>
                            </Grid>
                        </PopoverBody>
                    </PopoverContent>
                </>)}
        </Popover>
    );

}

export default AddExtension;
