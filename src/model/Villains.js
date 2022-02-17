const VillainState = {
    ACTIVE: 'Activo',
    DEFEATED: 'Derrotado',
}

const VillainPhase = {
    PHASE_1: 'I',
    PHASE_2: 'II',
    PHASE_3: 'III',
}

const VillainID = {
    RHINO: 'Rino'
}

const baseVillain = (type: VillainID, phase: VillainPhase, maxHP:Number) =>
    ({
        type,
        phase,
        state: VillainState.ACTIVE,
        hp: maxHP,
        maxHP,
        addHP: function (points: Number) {
            let health = this.life + points;
            let state = VillainState.ACTIVE;

            if (health > this.maxHP /*TODO +aumentos*/) {
                health = this.maxHP;
            } else if (health <= 0) {
                state = VillainState.DEFEATED;
                health = 0;
            }

            return {...this, state, life: health};
        },
        heal: function (points: Number) { return this.addHP(points); },
        hit: function (points: Number) {
            return this.addHP(-points)
        }
    });

export const Rhino1 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.RHINO, VillainPhase.PHASE_1,  14 * numPlayers)
});

export const Rhino2 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.RHINO, VillainPhase.PHASE_2,  15 * numPlayers)
});

export const Rhino3 = (numPlayers: Number) => ({
    ...baseVillain(VillainID.RHINO, VillainPhase.PHASE_3,  16 * numPlayers)
});
