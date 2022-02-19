import {combineReducers} from 'redux';
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

const initialState = {
    villain1: null,
    scheme1: null,
    villain2: null,
    scheme2: null,
    environment1: null
};

const villainByZone = (zone, initialState) => (state = initialState, action) => {
    switch (action.type) {
        case byZone(INIT_VILLAIN_ZONE, zone):
            return action.villain?.villainPhases || initialState;
        case byZone(HIT_VILLAIN, zone):
            return state.map(v => v.id === action.villainID ? v.hit(action.quantity) : v);
        case byZone(HEAL_VILLAIN, zone):
            return state.map(v => v.id === action.villainID ? v.heal(action.quantity) : v);
        case byZone(ADD_VILLAIN_MAX_HP_EXTENSION, zone):
            return state.map(v => v.id === action.villainID ? v.addExtension(action.extension) : v);
        case byZone(REMOVE_VILLAIN_EXTENSION, zone):
            return state.map(v => v.id === action.villainID ? v.removeExtension(action.extension) : v);
        default:
            return state;
    }
}

const schemeByZone = (zone, initialState) => (state = initialState, action) => {
    switch (action.type) {
        case byZone(INIT_VILLAIN_ZONE, zone):
            return action.villain?.schemePhases || initialState;;
        case byZone(START_VILLAIN_PHASE, zone):
            return state.map(s => s.id === action.schemeID ? s.runVillainPhase() : s);
        case byZone(THWART_SCHEME, zone):
            return state.map(s => s.id === action.schemeID ? s.removeThreat(action.quantity) : s);
        case byZone(MACHINATE_SCHEME, zone):
            return state.map(s => s.id === action.schemeID ? s.addThreat(action.quantity) : s);
        case byZone(ADD_SCHEME_EXTENSION, zone):
            return state.map(s => s.id === action.schemeID ? s.addExtension(action.extension) : s);
        case byZone(REMOVE_SCHEME_EXTENSION, zone):
            return state.map(s => s.id === action.schemeID ? s.removeExtension(action.extension) : s);
        default:
            return state;
    }
}

const environmentByZone = (zone, initialState) => (state = initialState, action) => {
    switch (action.type) {
        case byZone(INIT_ENVIRONMENT_ZONE, zone):
            return action.environment;
        default:
            return state;
    }
}

const reducer = combineReducers({
    villain1: villainByZone(1, initialState.villain1),
    scheme1: schemeByZone(1, initialState.scheme1),
    villain2: villainByZone(2, initialState.villain2),
    scheme2: schemeByZone(2, initialState.scheme2),
    environment1: environmentByZone(1, initialState.environment1),
});

export default reducer;

