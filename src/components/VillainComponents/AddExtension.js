import {
    Box,
    Button,
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


const AddExtension = ({action}) => {

    const [maxHP, setMaxHP] = useState(1);

    const addMaxHPExtension = () => {
        action(maxHP);
        setMaxHP(1);
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
                            <Box display={'inline-flex'}>
                                <Box>
                                    <NumberInput value={maxHP} min={0} onChange={e => setMaxHP(Number(e))} size='md' maxW={20}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <Button ml={1} size={'md'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                        onClick={() => {onClose(); addMaxHPExtension();}}>
                                    HP
                                </Button>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </>)}
        </Popover>
    );

}

export default AddExtension;
