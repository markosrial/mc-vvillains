import {Rhino1, Rhino2, Rhino3} from './Villains';
import {RhinoScheme1} from './Scheme';
import * as assets from '../assets'

export const GamesEnum = {
    RHINO: 'Rino',
    KLAW: 'Klaw',
    ULTRON: 'Ultron',
    EVONY_MAW: 'Fauces Negras',
    TOWER_DEFENSE: 'Defender la torre',
    THANOS: 'Thanos',
    HELA: 'Hela',
    LOKI: 'Loki',
}

export const GamesModeEnum = {
    NORMAL: 'Normal',
    EXPERT: 'Experto'
}

export const gameImageSelector = (selected) => {
    switch (selected) {
        case GamesEnum.RHINO:
            return assets.RhinoCard;
        case GamesEnum.KLAW:
            return assets.KlawCard;
        case GamesEnum.ULTRON:
            return assets.UltronCard;
        case GamesEnum.EVONY_MAW:
            return assets.EvonyMawCard;
        case GamesEnum.TOWER_DEFENSE:
            return assets.TowerDefCard;
        case GamesEnum.THANOS:
            return assets.ThanosCard;
        case GamesEnum.HELA:
            return assets.HelaCard;
        case GamesEnum.LOKI:
            return assets.LokiCard;
        default:
            return null;
    }
}

const Game = (villainZone1, villainZone2, environmentZone1) => ({
    villainZone1,
    villainZone2,
    environmentZone1,
});

export const NormalGameBuilder = (numPlayers) => ({
    buildRhino: () => Game(RhinoNormalGameZone(numPlayers)),
});

export const ExpertGameBuilder = (numPlayers) => ({
    buildRhino: () => Game(RhinoExpertGameZone(numPlayers)),
});

export const generateGame = (game, mode, numPlayers) => {
    let builder;

    switch (mode) {
        case GamesModeEnum.EXPERT:
            builder = ExpertGameBuilder;
            break;
        default:
            builder = NormalGameBuilder;
            break;
    }

    builder = builder(numPlayers);

    switch (game) {
        case GamesEnum.RHINO:
            return builder.buildRhino();
        /*case GamesEnum.KLAW:
            return builder.buildKlaw();
        case GamesEnum.ULTRON:
            return builder.buildUltron();
        case GamesEnum.EVONY_MAW:
            return builder.buildEvonyMaw();
        case GamesEnum.TOWER_DEFENSE:
            return builder.buildTowerDefense();
        case GamesEnum.THANOS:
            return builder.buildThanos();
        case GamesEnum.HELA:
            return builder.buildHela();
        case GamesEnum.LOKI:
            return builder.buildLoki();*/
        default:
            return null;
    }
}

export const RhinoNormalGameZone = (numPlayers: Number) => ({
    villain: [Rhino1(numPlayers), Rhino2(numPlayers)],
    scheme: [RhinoScheme1(numPlayers)]
});

export const RhinoExpertGameZone = (numPlayers: Number) => ({
    villain: [Rhino2(numPlayers), Rhino3(numPlayers)],
    scheme: [RhinoScheme1(numPlayers)]
});
