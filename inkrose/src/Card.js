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

    getName() {
        return this.name;
      }
    
      getCost() {
        return this.cost;
      }
    
      getType() {
        return this.type;
      }
    
      getPower() {
        return this.power;
      }
    
      getHealth() {
        return this.health;
      }
    
      getSigils() {
        return this.sigils;
      }
    
      getTextPrimary() {
        return this.textPrimary;
      }
    
      getTextSecondary() {
        return this.textSecondary;
      }
    
      getTextFlavour() {
        return this.textFlavour;
      }
    
      getCardId() {
        return this.cardId;
      }
    
      getRarity() {
        return this.rarity;
      }
    
      toString() {
        return `${this.name} (${this.cost}) [${this.type}]`;
      }
}