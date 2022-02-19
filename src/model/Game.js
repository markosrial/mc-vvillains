import {
    CorvusGlaive1,
    CorvusGlaive2,
    CorvusGlaive3,
    EbonyMaw1,
    EbonyMaw2,
    EbonyMaw3,
    HelaA1,
    HelaA2,
    HelaB1,
    HelaB2,
    Klaw1,
    Klaw2,
    Klaw3,
    Loki1,
    ProximaMidnight1,
    ProximaMidnight2,
    ProximaMidnight3,
    Rhino1,
    Rhino2,
    Rhino3,
    Thanos1,
    Thanos2,
    Thanos3,
    Ultron1,
    Ultron2,
    Ultron3
} from './Villains';
import {
    CorvusGlaiveScheme1,
    EbonyMawScheme1,
    EbonyMawScheme2,
    HelaScheme1,
    KlawScheme1,
    KlawScheme2,
    LokiScheme1,
    ProximaMidnightScheme1,
    RhinoScheme1,
    ThanosScheme1,
    ThanosScheme2,
    UltronScheme1,
    UltronScheme2,
    UltronScheme3
} from './Scheme';
import * as assets from '../assets'

export const GamesEnum = {
    RHINO: 'Rino',
    KLAW: 'Klaw',
    ULTRON: 'Ultron',
    EBONY_MAW: 'Fauces Negras',
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
        case GamesEnum.EBONY_MAW:
            return assets.EbonyMawCard;
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

const Game = (villainZone1, villainZone2 = null, environmentZone1 = null) => ({
    villainZone1,
    villainZone2,
    environmentZone1,
});

export const NormalGameBuilder = (numPlayers) => ({
    buildRhino: () => Game(RhinoNormalZone(numPlayers)),
    buildKlaw: () => Game(KlawNormalZone(numPlayers)),
    buildUltron: () => Game(UltronNormalZone(numPlayers)),
    buildEbonyMaw: () => Game(EbonyMawNormalZone(numPlayers)),
    buildTowerDefense: () => Game(ProximaMidnightNormalZone(numPlayers), CorvusGlaiveNormalZone(numPlayers)),
    buildThanos: () => Game(ThanosNormalZone(numPlayers)),
    buildHela: () => Game(HelaNormalZone(numPlayers)),
    buildLoki: () => Game(LokiNormalZone(numPlayers)),
});

export const ExpertGameBuilder = (numPlayers) => ({
    buildRhino: () => Game(RhinoExpertZone(numPlayers)),
    buildKlaw: () => Game(KlawExpertZone(numPlayers)),
    buildUltron: () => Game(UltronExpertZone(numPlayers)),
    buildEbonyMaw: () => Game(EbonyMawExpertZone(numPlayers)),
    buildTowerDefense: () => Game(ProximaMidnightExpertZone(numPlayers), CorvusGlaiveExpertZone(numPlayers)),
    buildThanos: () => Game(ThanosExpertZone(numPlayers)),
    buildHela: () => Game(HelaExpertZone(numPlayers)),
    buildLoki: () => Game(LokiExpertZone(numPlayers)),
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
        case GamesEnum.KLAW:
            return builder.buildKlaw();
        case GamesEnum.ULTRON:
            return builder.buildUltron();
        case GamesEnum.EBONY_MAW:
            return builder.buildEbonyMaw();
        case GamesEnum.TOWER_DEFENSE:
            return builder.buildTowerDefense();
        case GamesEnum.THANOS:
            return builder.buildThanos();
        case GamesEnum.HELA:
            return builder.buildHela();
        case GamesEnum.LOKI:
            return builder.buildLoki();
        default:
            return null;
    }
}

const buildVillainZone = (numPlayers: Number, villains: Array, schemes: Array) => ({
    villainPhases: villains.map(v => v(numPlayers)),
    schemePhases: schemes.map(s => s(numPlayers)),
})

const RhinoNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Rhino1, Rhino2], [RhinoScheme1]);
const RhinoExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Rhino2, Rhino3], [RhinoScheme1]);

const KlawNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Klaw1, Klaw2], [KlawScheme1, KlawScheme2]);
const KlawExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Klaw2, Klaw3], [KlawScheme1, KlawScheme2]);

const UltronNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Ultron1, Ultron2], [UltronScheme1, UltronScheme2, UltronScheme3]);
const UltronExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Ultron2, Ultron3], [UltronScheme1, UltronScheme2, UltronScheme3]);

const EbonyMawNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [EbonyMaw1, EbonyMaw2], [EbonyMawScheme1, EbonyMawScheme2]);
const EbonyMawExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [EbonyMaw2, EbonyMaw3], [EbonyMawScheme1, EbonyMawScheme2]);

const ProximaMidnightNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [ProximaMidnight1, ProximaMidnight2], [ProximaMidnightScheme1]);
const ProximaMidnightExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [ProximaMidnight2, ProximaMidnight3], [ProximaMidnightScheme1]);

const CorvusGlaiveNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [CorvusGlaive1, CorvusGlaive2], [CorvusGlaiveScheme1]);
const CorvusGlaiveExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [CorvusGlaive2, CorvusGlaive3], [CorvusGlaiveScheme1]);

const ThanosNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Thanos1, Thanos2], [ThanosScheme1, ThanosScheme2]);
const ThanosExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Thanos2, Thanos3], [ThanosScheme1, ThanosScheme2]);

const HelaNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [HelaA1, HelaB1], [HelaScheme1]);
const HelaExpertZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [HelaA2, HelaB2], [HelaScheme1]);

const LokiNormalZone = (numPlayers: Number) =>
    buildVillainZone(numPlayers, [Loki1], [LokiScheme1]);
const LokiExpertZone = (numPlayers: Number) => LokiNormalZone(numPlayers);
