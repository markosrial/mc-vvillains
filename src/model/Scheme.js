const SchemeState = {
    ACTIVE: 'Activo',
    COMPLETED: 'Completado',
}

const SchemePhase = {
    PHASE_1: '1',
    PHASE_2: '2',
    PHASE_3: '3',
}

const SchemeID = {
    RHINO_1: '¡Allanamiento!'
}

const baseScheme = (type: SchemeID, phase: SchemePhase,
                    initialThreat: Number, maxThreat:Number, phaseIncrement: Number) =>
    ({
        type,
        phase,
        state: SchemeState.ACTIVE,
        threat: initialThreat,
        maxThreat,
        phaseIncrement,
        addThreat: function (points: Number) {
            let nextThreat = this.threat + points;
            let state = SchemeState.ACTIVE;

            if (nextThreat >= this.getMaxThreat()) {
                state = SchemeState.COMPLETED;
                nextThreat = this.getMaxThreat();
            } else if (nextThreat <= 0) {
                nextThreat = 0;
            }

            return {...this, state, threat: nextThreat};
        },
        removeThreat: function (points: Number) {
            return this.addThreat(-points)
        },
        runVillainPhase: function () {
            return this.addThreat(this.getPhaseIncrement())
        },
        getMaxThreat: function () {
            return this.maxThreat; /*TODO +aumentos*/
        },
        getPhaseIncrement: function () {
            return this.phaseIncrement; /*TODO +aumentos*/
        }
    });

export const RhinoScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.RHINO_1, SchemePhase.PHASE_1, 0, 7 * numPlayers, 1 * numPlayers)
});
