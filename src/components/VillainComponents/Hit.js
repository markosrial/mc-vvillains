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
import {GiPunchBlast} from 'react-icons/gi';
import {FiCheck} from 'react-icons/fi';
import {useState} from 'react';


const Hit = ({action}) => {

    const [attack, setAttack] = useState(1);

    const runAttack = () => {
        action(attack);
        setAttack(1);
    }

    return (
        <Popover>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <IconButton icon={<GiPunchBlast fontSize={'1.5rem'}/>}/>
                    </PopoverTrigger>
                    <PopoverContent width={'4xs'} >
                        <PopoverArrow />
                        <PopoverBody>
                            <Box display={'inline-flex'}>
                                <Box>
                                    <NumberInput value={attack} min={0} onChange={e => setAttack(Number(e))} size='md' maxW={20}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <IconButton ml={1} size={'md'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                            onClick={() => {onClose(); runAttack();}}/>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </>)}
        </Popover>
    );

}

export default Hit;
