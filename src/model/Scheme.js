export const SchemeState = {
    ACTIVE: 'Activo',
    COMPLETED: 'Completado',
}

export const SchemeExtensionEnum = {
    MAX_THR: 'Amenaza (máx)',
    EXTRA_PHASE_THR: 'Amenaza × fase'
}

const SchemePhase = {
    PHASE_1: 1,
    PHASE_2: 2,
    PHASE_3: 3,
}

const SchemeID = {
    RHINO_1: '1B - ¡Allanamiento!',
    KLAW_1: '1B - Distribución clandestina',
    KLAW_2: '2B - Reunión secreta',
    ULTRON_1: '1B - La capucha carmesí',
    ULTRON_2: '2B - Ataque al NORAD',
    ULTRON_3: '3B - Cuenta atrás para el olvido',
    EBONY_MAW_1: '1B - Ataque a Sapiencial',
    EBONY_MAW_2: '2B - La Gema del Poder',
    PROXIMA_MIDNIGHT_1: '1B - Bajo asedio',
    CORVUS_GLAIVE_1: '2B - Los ejercitos de Thanos',
    THANOS_1: '1B - Las Gemas del Infinito',
    THANOS_2: '2B - Equilibrar la balanza',
    HELA_1: '1B - El tormento de Odín',
    LOKI_1: '1B - Alabado sea el rey Loki',
}

const baseScheme = (id: SchemeID, phase: SchemePhase,
                    initialThreat: Number, maxThreat:Number, phaseIncrement: Number) =>
    ({
        id,
        phase,
        state: SchemeState.ACTIVE,
        threat: initialThreat,
        maxThreat,
        phaseIncrement,
        extensions: [],
        addThreat: function (points: Number) {
            let nextThreat = this.threat + points;
            let state = SchemeState.ACTIVE;

            if (nextThreat >= this.getMaxThreat()) {
                state = SchemeState.COMPLETED;
                nextThreat = this.getMaxThreat();
            } else if (nextThreat <= 0) {
                nextThreat = 0;
            }

            this.state = state;
            this.threat = nextThreat;

            return {...this};
        },
        removeThreat: function (points: Number) {
            return this.addThreat(-points)
        },
        runVillainPhase: function () {
            return this.addThreat(this.getPhaseIncrement())
        },
        getMaxThreat: function () {
            return this.extensions.reduce(
                (prev, current) => prev + (current.type === SchemeExtensionEnum.MAX_THR ? current.quantity : 0),
                this.maxThreat
            );
        },
        getPhaseIncrement: function () {
            return this.extensions.reduce(
                (prev, current) => prev + (current.type === SchemeExtensionEnum.EXTRA_PHASE_THR ? current.quantity : 0),
                this.phaseIncrement
            );
        },
        addExtension: function (extension) {
            this.extensions.push(extension);
            return {...this}
        },
        removeExtension: function (extension) {
            this.extensions = this.extensions.filter(ext => ext !== extension);

            switch (extension.type) {
                case SchemeExtensionEnum.MAX_THR:
                    this.addThreat(0);
                    break;
                default:
                    break;
            }

            return {...this}
        }
    });

export const RhinoScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.RHINO_1, SchemePhase.PHASE_1, 0, 7 * numPlayers, 1 * numPlayers)
});

export const KlawScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.KLAW_1, SchemePhase.PHASE_1, 0, 6 * numPlayers, 1 * numPlayers)
});
export const KlawScheme2 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.KLAW_2, SchemePhase.PHASE_2, 0, 8 * numPlayers, 1 * numPlayers)
});

export const UltronScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.ULTRON_1, SchemePhase.PHASE_1, 0, 3 * numPlayers, 1 * numPlayers)
});
export const UltronScheme2 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.ULTRON_2, SchemePhase.PHASE_2, 0, 10 * numPlayers, 1 * numPlayers)
});
export const UltronScheme3 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.ULTRON_3, SchemePhase.PHASE_3, 0, 5 * numPlayers, 1 * numPlayers)
});

export const EbonyMawScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.EBONY_MAW_1, SchemePhase.PHASE_1, 1 * numPlayers, 6 * numPlayers, 1 * numPlayers)
});
export const EbonyMawScheme2 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.EBONY_MAW_2, SchemePhase.PHASE_2, 1 * numPlayers, 9 * numPlayers, 1 * numPlayers)
});

export const ProximaMidnightScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.PROXIMA_MIDNIGHT_1, SchemePhase.PHASE_1, 1 * numPlayers, 6 * numPlayers, 1 * numPlayers)
});

export const CorvusGlaiveScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.CORVUS_GLAIVE_1, SchemePhase.PHASE_1, 1 * numPlayers, 6 * numPlayers, 1 * numPlayers)
});

export const ThanosScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.THANOS_1, SchemePhase.PHASE_1, 0, 12 * numPlayers, 1 * numPlayers)
});
export const ThanosScheme2 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.THANOS_2, SchemePhase.PHASE_2, 0, 12 * numPlayers, 1 * numPlayers)
});

export const HelaScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.HELA_1, SchemePhase.PHASE_1, 1 * numPlayers, 18 * numPlayers, 1 * numPlayers)
});

export const LokiScheme1 = (numPlayers: Number) => ({
    ...baseScheme(SchemeID.LOKI_1, SchemePhase.PHASE_1, 1 * numPlayers, 12 * numPlayers, 1 * numPlayers)
});
