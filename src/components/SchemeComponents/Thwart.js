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
import {GiWebSpit} from 'react-icons/gi';
import {FiCheck} from 'react-icons/fi';
import {useState} from 'react';


const Machinate = ({action}) => {

    const [thwart, setThwart] = useState(1);

    const runThwart = () => {
        action(thwart);
        setThwart(1);
    }

    return (
        <Popover>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <IconButton icon={<GiWebSpit fontSize={'1.5rem'}/>}/>
                    </PopoverTrigger>
                    <PopoverContent width={'4xs'} >
                        <PopoverArrow />
                        <PopoverBody>
                            <Box display={'inline-flex'}>
                                <Box>
                                    <NumberInput value={thwart} min={0} onChange={e => setThwart(Number(e))} size='md' maxW={20}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Box>
                                <IconButton ml={1} size={'md'} icon={<FiCheck fontSize={'1.5rem'}/>}
                                            onClick={() => {onClose(); runThwart();}}/>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </>)}
        </Popover>
    );

}

export default Machinate;
