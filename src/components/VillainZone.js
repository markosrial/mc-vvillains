import {Box, Grid, GridItem} from '@chakra-ui/react';
import VillainPhases from './VillainPhases';
import SchemePhases from './SchemePhases';

const VillainZone = ({zone, villain, scheme}) => {

    if (!villain || !scheme) {
        return null;
    }

    return (
        <Box p={5}>
            <Grid templateRows='repeat(2, 1fr)'>
                <GridItem>
                    <VillainPhases zone={zone} villainPhases={villain}/>
                </GridItem>
                <GridItem mt={4}>
                    <SchemePhases zone={zone} schemePhases={scheme}/>
                </GridItem>
            </Grid>
        </Box>
    );

}

export default VillainZone;
