const getModuleState = state => state.currentGame

export const getVillain1 = state => getModuleState(state).villain1;
export const getVillain2 = state => getModuleState(state).villain2;

export const getScheme1 = state => getModuleState(state).scheme1;
export const getScheme2 = state => getModuleState(state).scheme2;

export const environment1 = state => getModuleState(state).environment1;
