export default class Card {
    constructor(
        name,
        cost,
        type,
        power,
        health,
        sigils,
        textPrimary,
        textSecondary,
        textFlavour,
        cardId,
        rarity)
    {
        this.name = name;
        this.cost = cost;
        this.type = type;
        this.power = power;
        this.health = health;
        this.sigils = sigils;
        this.textPrimary = textPrimary;
        this.textSecondary = textSecondary;
        this.textFlavour = textFlavour;
        this.cardId = cardId;
        this.rarity = rarity;
    }

    toString() {
      return `${this.name} (${this.cost}) [${this.type}]`;
    }
}