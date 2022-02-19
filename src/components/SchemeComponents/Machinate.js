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
import {GiTimeBomb} from 'react-icons/gi';
import {FiCheck} from 'react-icons/fi';
import {useState} from 'react';


const Machinate = ({action}) => {

    const [scheme, setScheme] = useState(1);

    const runMachinate = () => {
        action(scheme);
        setScheme(1);
    }

    return (
        <Popover>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <IconButton icon={<GiTimeBomb fontSize={'1.5rem'}/>}/>
                    </PopoverTrigger>
                    <PopoverContent width={'4xs'} >
                        <PopoverArrow />
                        <PopoverBody>
                            <Box display={'inline-flex'}>
                                <Box>
                                    <NumberInput value={scheme} min={0} onChange={e => setScheme(Number(e))} size='sm' maxW={20}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <IconButton ml={1} size={'sm'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                            onClick={() => {onClose(); runMachinate();}}/>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </>)}
        </Popover>
    );

}

export default Machinate;
