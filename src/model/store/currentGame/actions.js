import {
    byZone,
    HEAL_VILLAIN,
    HIT_VILLAIN,
    INIT_ENVIRONMENT_ZONE,
    INIT_VILLAIN_ZONE, MACHINATE_SCHEME,
    START_VILLAIN_PHASE, THWART_SCHEME
} from './actionTypes';

export const initVillainZone = (zone, villain) => ({
    type: byZone(INIT_VILLAIN_ZONE, zone),
    villain
});

export const initEnvironmentZone = (zone, environment) => ({
    type: byZone(INIT_ENVIRONMENT_ZONE, zone),
    environment
});

export const hitVillain = (zone, villainID, quantity) => ({
    type: byZone(HIT_VILLAIN, zone),
    villainID,
    quantity
});

export const healVillain = (zone, villainID, quantity) => ({
    type: byZone(HEAL_VILLAIN, zone),
    villainID,
    quantity
});

export const runVillainPhase = (zone, schemeID) => ({
    type: byZone(START_VILLAIN_PHASE, zone),
    schemeID
});

export const thwartScheme = (zone, schemeID, quantity) => ({
    type: byZone(THWART_SCHEME, zone),
    schemeID,
    quantity
});

export const machinateScheme = (zone, schemeID, quantity) => ({
    type: byZone(MACHINATE_SCHEME, zone),
    schemeID,
    quantity
});
