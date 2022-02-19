import {Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue} from '@chakra-ui/react';
import SchemePhasePanel from './SchemeComponents/SchemePhasePanel';

const SchemePhases = ({zone, schemePhases}) => {

    const bgColorContent = useColorModeValue('gray.50', 'gray.600')

    if (!schemePhases) {
        return null;
    }

    return (
        <Box boxShadow={'lg'} rounded={'md'} bg={bgColorContent}>
            <Tabs isFitted size='md'>
                <TabList>
                    {schemePhases.map(sp => (<Tab key={sp.id} width={100}><Text isTruncated>{sp.id}</Text></Tab>))}
                </TabList>
                <TabPanels>
                    {schemePhases.map(sp => (<TabPanel key={sp.id}><SchemePhasePanel z={zone} sp={sp}/></TabPanel>))}
                </TabPanels>
            </Tabs>
        </Box>
    );

}

export default SchemePhases;
