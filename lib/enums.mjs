export { ENUMS }

/* Provide a list of static enums that can be used throughout the code to not have to do text comparison */
class ENUMS {
    CARD_TYPES = {
        UNKNOWN: 0,
        ANCESTORY: 1,
        COMMUNITY: 2,
        CLASS: 3,
        FOUNDATION: 4,
        SPECIALIZATION: 5,
        MASTERY: 6, 
        DOMAIN: 7,
    }

    DOMAIN_CARD_TYPE = {
        UNKNWON: 0,
        ABILITY: 1,
        SPELL: 2,
        GRIMOIRE: 3,
    }

    TRAITS = {
        UNKNOWN: 0,
        AGILITY: 1,
        STRENGTH: 2,
        FINESSE: 3,
        INSTINCT: 4,
        PRESENCE: 5,
        KNOWLEDGE: 6
    }

    THRESHOLDS = {
        UNKNOWN: 0,
        MINOR: 1,
        MAJOR: 2,
        SEVERE: 3,
        EXTREME: 4,
        DEADLY: 5
    }

    DOMAINS = {
        UNKNWON: 0,
        ARCANA: 1,
        BLADE: 2,
        BONE: 3,
        CODEX: 4,
        GRACE: 5,
        MIDNIGHT: 6,
        SAGE: 7,
        SPLENDOR: 8,
        VALOR: 9
    }

    DICE_TYPE = {
        UNKNOWN: 0,
        D2: 1,
        D3: 2,
        D4: 3,
        D6: 6,
        D8: 8,
        D10: 10,
        D12: 12,
        D20: 20,
        D50: 50,
        D100: 100
    }

    CURRENCY = {
        UNKNOWN: 0,
        COINS: 1,
        HANDFULLS: 2,
        BAGS: 3,
        CHESTS: 4
    }

    MODIFIER_SELECTOR = {
        UNKNOWN: 0,
        MINOR_THRESHOLD: 1,
        MAJOR_THRESHOLD: 2,
        SEVERE_THRESHOLD: 3,
        EXTREME_THRESHOLD: 4,
        DEADLY_THRESHOLD: 5,
        HP: 6,
        STRESS: 7,
        HOPE: 8,
        PROFICENCY: 9,
        DAMAGE: 10,
        TRAIT_AGILITY: 11,
        TRAIT_STRENGTH: 15,
        TRAIT_FINESSE: 16,
        TRAIT_INSTINCT: 17,
        TRAIT_PRESENCE: 18,
        TRAIT_KNOWLEDGE: 19,
    }

    DAMAGE_TYPE = {
        UNKNOWN: 0,
        MAGICAL: 1,
        PHYSICAL: 2,
        ELEMENTAL: 3
    }

    ADVERSARY_TYPE = {
        UNKNOWN: 0,
        MINION: 0,
        RANGED: 1,
        BRUTE: 2,
        SKULKER: 3,
        SOLO: 4
    }

    CONDITIONS = {
        UNKNOWN: 0,
        HIDDEN: 1,
        COVER: 2,
        RESTRAINED: 3,
        VULNERABLE: 4,
    }

    RANGE = {
        UNKNOWN: 0,
        MELEE: 1,
        VERY_CLOSE: 2,
        CLOSE: 3,
        FAR: 4,
        VERY_FAR: 5
    }
}