import {
    Box,
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
import {GiHeartPlus} from 'react-icons/gi';
import {FiCheck} from 'react-icons/fi';
import {useState} from 'react';


const Heal = ({action}) => {

    const [heal, setHeal] = useState(1);

    const runHeal = () => {
        action(heal);
        setHeal(1);
    }

    return (
        <Popover>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <IconButton icon={<GiHeartPlus fontSize={'1.5rem'}/>}/>
                    </PopoverTrigger>
                    <PopoverContent width={'4xs'} >
                        <PopoverArrow />
                        <PopoverBody>
                            <Box display={'inline-flex'}>
                                <Box>
                                    <NumberInput value={heal} min={0} onChange={e => setHeal(Number(e))} size='md' maxW={20}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <IconButton ml={1} size={'md'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                            onClick={() => {onClose(); runHeal();}}/>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </>)}
        </Popover>
    );

}

export default Heal;
