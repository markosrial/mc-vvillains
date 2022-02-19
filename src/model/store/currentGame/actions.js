import {
    ADD_SCHEME_EXTENSION,
    ADD_VILLAIN_MAX_HP_EXTENSION,
    byZone,
    HEAL_VILLAIN,
    HIT_VILLAIN,
    INIT_ENVIRONMENT_ZONE,
    INIT_VILLAIN_ZONE,
    MACHINATE_SCHEME,
    REMOVE_SCHEME_EXTENSION,
    REMOVE_VILLAIN_EXTENSION,
    START_VILLAIN_PHASE,
    THWART_SCHEME
} from './actionTypes';
import {VillainExtensionEnum} from '../../Villains';
import {SchemeExtensionEnum} from '../../Scheme';

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

export const addVillainMaxHPExtension = (zone, villainID, quantity) => ({
    type: byZone(ADD_VILLAIN_MAX_HP_EXTENSION, zone),
    villainID,
    extension: {type: VillainExtensionEnum.MAX_HP, quantity}
});

export const removeVillainExtension = (zone, villainID, extension) => ({
    type: byZone(REMOVE_VILLAIN_EXTENSION, zone),
    villainID,
    extension
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

export const addSchemeMaxTHRExtension = (zone, schemeID, quantity) => ({
    type: byZone(ADD_SCHEME_EXTENSION, zone),
    schemeID,
    extension: {type: SchemeExtensionEnum.MAX_THR, quantity}
});

export const addSchemeExtraPhaseTHRExtension = (zone, schemeID, quantity) => ({
    type: byZone(ADD_SCHEME_EXTENSION, zone),
    schemeID,
    extension: {type: SchemeExtensionEnum.EXTRA_PHASE_THR, quantity}
});

export const removeSchemeExtension = (zone, schemeID, extension) => ({
    type: byZone(REMOVE_SCHEME_EXTENSION, zone),
    schemeID,
    extension
});
