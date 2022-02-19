import * as assets from '../assets';

export const VillainState = {
    ACTIVE: 'Activo',
    DEFEATED: 'Derrotado',
}

export const VillainExtensionEnum = {
    MAX_HP: 'HP (máx)'
}

const VillainPhase = {
    PHASE_1: 1,
    PHASE_2: 2,
    PHASE_3: 3,
}

const VillainID = {
    RHINO_I: 'Rino I',
    RHINO_II: 'Rino II',
    RHINO_III: 'Rino III',
    KLAW_I: 'Klaw I',
    KLAW_II: 'Klaw II',
    KLAW_III: 'Klaw III',
    ULTRON_I: 'Ultron I',
    ULTRON_II: 'Ultron II',
    ULTRON_III: 'Ultron III',
    EBONY_MAW_I: 'Fauces Negras I',
    EBONY_MAW_II: 'Fauces Negras II',
    EBONY_MAW_III: 'Fauces Negras III',
    PROXIMA_MIDNIGHT_I: 'Medianoche Próxima I',
    PROXIMA_MIDNIGHT_II: 'Medianoche Próxima II',
    PROXIMA_MIDNIGHT_III: 'Medianoche Próxima III',
    CORVUS_GLAIVE_I: 'Corvus Glaive I',
    CORVUS_GLAIVE_II: 'Corvus Glaive II',
    CORVUS_GLAIVE_III: 'Corvus Glaive III',
    THANOS_I: 'Thanos I',
    THANOS_II: 'Thanos II',
    THANOS_III: 'Thanos III',
    HELA_A1: 'Hela A1',
    HELA_A2: 'Hela A2',
    HELA_B1: 'Hela B1',
    HELA_B2: 'Hela B2',
    LOKI_I: 'Loki I',
}

const baseVillain = (id: VillainID, phase: VillainPhase, maxHP:Number, image = null) =>
    ({
        id,
        phase,
        state: VillainState.ACTIVE,
        hp: maxHP,
        maxHP,
        image,
        extensions: [],
        addHP: function (points: Number) {
            let health = this.hp + points;
            let state = VillainState.ACTIVE;

            if (health > this.getMaxHP() /*TODO +aumentos*/) {
                health = this.getMaxHP();
            } else if (health <= 0) {
                state = VillainState.DEFEATED;
                health = 0;
            }

            this.state = state;
            this.hp = health;

            return {...this};
        },
        heal: function (points: Number) { return this.addHP(points); },
        hit: function (points: Number) {
            return this.addHP(-points)
        },
        getMaxHP: function () {
            return this.extensions.reduce(
                (prev, current) => prev + (current.type === VillainExtensionEnum.MAX_HP ? current.quantity : 0),
                this.maxHP
            );
        },
        addExtension: function (extension) {

            this.extensions.push(extension);

            switch (extension.type) {
                case VillainExtensionEnum.MAX_HP:
                    this.addHP(extension.quantity);
                    break;
                default:
                    break;
            }

            return {...this}
        },
        removeExtension: function (extension) {
            this.extensions = this.extensions.filter(ext => ext !== extension);

            switch (extension.type) {
                case VillainExtensionEnum.MAX_HP:
                    this.hit(extension.quantity);
                    break;
                default:
                    break;
            }

            return {...this}
        }
    });

export const Rhino1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.RHINO_I, VillainPhase.PHASE_1,  14 * numPlayers, assets.RhinoPhase)
});
export const Rhino2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.RHINO_II, VillainPhase.PHASE_2,  15 * numPlayers, assets.RhinoPhase)
});
export const Rhino3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.RHINO_III, VillainPhase.PHASE_3,  16 * numPlayers, assets.RhinoPhase)
});

export const Klaw1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.KLAW_I, VillainPhase.PHASE_1,  12 * numPlayers, assets.KlawPhase)
});
export const Klaw2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.KLAW_II, VillainPhase.PHASE_2,  18 * numPlayers, assets.KlawPhase)
});
export const Klaw3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.KLAW_III, VillainPhase.PHASE_3,  22 * numPlayers, assets.KlawPhase)
});

export const Ultron1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.ULTRON_I, VillainPhase.PHASE_1,  17 * numPlayers, assets.UltronPhase)
});
export const Ultron2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.ULTRON_II, VillainPhase.PHASE_2,  22 * numPlayers, assets.UltronPhase)
});
export const Ultron3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.ULTRON_III, VillainPhase.PHASE_3,  27 * numPlayers, assets.UltronPhase)
});

export const EbonyMaw1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.EBONY_MAW_I, VillainPhase.PHASE_1,  14 * numPlayers, assets.EbonyMawPhase)
});
export const EbonyMaw2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.EBONY_MAW_II, VillainPhase.PHASE_2,  18 * numPlayers, assets.EbonyMawPhase)
});
export const EbonyMaw3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.EBONY_MAW_III, VillainPhase.PHASE_3,  23 * numPlayers, assets.EbonyMawPhase)
});

export const ProximaMidnight1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.PROXIMA_MIDNIGHT_I, VillainPhase.PHASE_1,  9 * numPlayers, assets.ProximaPhase)
});
export const ProximaMidnight2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.PROXIMA_MIDNIGHT_II, VillainPhase.PHASE_2,  12 * numPlayers, assets.ProximaPhase)
});
export const ProximaMidnight3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.PROXIMA_MIDNIGHT_III, VillainPhase.PHASE_3,  15 * numPlayers, assets.ProximaPhase)
});

export const CorvusGlaive1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.CORVUS_GLAIVE_I, VillainPhase.PHASE_1,  8 * numPlayers, assets.CorvusPhase)
});
export const CorvusGlaive2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.CORVUS_GLAIVE_II, VillainPhase.PHASE_2,  11 * numPlayers, assets.CorvusPhase)
});
export const CorvusGlaive3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.CORVUS_GLAIVE_III, VillainPhase.PHASE_3,  14 * numPlayers, assets.CorvusPhase)
});

export const Thanos1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.THANOS_I, VillainPhase.PHASE_1,  16 * numPlayers, assets.ThanosPhase)
});
export const Thanos2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.THANOS_II, VillainPhase.PHASE_2,  23 * numPlayers, assets.ThanosPhase)
});
export const Thanos3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.THANOS_III, VillainPhase.PHASE_3,  28 * numPlayers, assets.ThanosPhase)
});

export const HelaA1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.HELA_A1, VillainPhase.PHASE_1,  8 * numPlayers, assets.HelaPhase)
});
export const HelaB1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.HELA_B1, VillainPhase.PHASE_1,  0 * numPlayers, assets.HelaPhase)
});
export const HelaA2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.HELA_A2, VillainPhase.PHASE_2,  9, assets.HelaPhase)
});
export const HelaB2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.HELA_B2, VillainPhase.PHASE_2,  0, assets.HelaPhase)
});

export const Loki1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.LOKI_I, VillainPhase.PHASE_1,  20 * numPlayers, assets.LokiPhase)
});
