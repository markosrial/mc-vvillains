import {Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from '@chakra-ui/react';
import VillainPhasePanel from './VillainComponents/VillainPhasePanel';

const VillainPhases = ({zone, villainPhases}) => {

    const bgColorContent = useColorModeValue('gray.50', 'gray.600')

    if (!villainPhases) {
        return null;
    }

    return (
        <Box boxShadow={'lg'} rounded={'md'} bg={bgColorContent}>
            <Tabs isFitted size='md'>
                <TabList>
                    {villainPhases.map(vp => (<Tab key={vp.id}>{vp.id}</Tab>))}
                </TabList>
                <TabPanels>
                    {villainPhases.map(vp => (<TabPanel key={vp.id}><VillainPhasePanel z={zone} vp={vp}/></TabPanel>))}
                </TabPanels>
            </Tabs>
        </Box>
    );

}

export default VillainPhases;
