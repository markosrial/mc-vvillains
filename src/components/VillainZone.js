import {Box} from '@chakra-ui/react';
import VillainPhases from './VillainPhases';
import SchemePhases from './SchemePhases';

const VillainZone = ({zone, villain, scheme}) => {

    if (!villain || !scheme) {
        return null;
    }

    return (
        <Box p={5}>
            <Box>
                <VillainPhases zone={zone} villainPhases={villain}/>
            </Box>
            <Box mt={4}>
                <SchemePhases zone={zone} schemePhases={scheme}/>
            </Box>
        </Box>
    );

}

export default VillainZone;
