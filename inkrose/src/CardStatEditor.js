import React, { useState, useEffect } from 'react';

export default function CardEditor ({card, setCard}) {

    const [formData, setFormData] = useState({
        name: card.name,
        cost: card.cost,
        type: card.type,
        power: card.power,
        health: card.health,
        textPrimary: card.textPrimary,
        textSecondary: card.textSecondary,
        textFlavour: card.textFlavour,
        cardId: card.cardId,
        rarity: card.rarity,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        handleSave();
     }, [formData]);

    const handleSave = () => {
        setCard({
            ...card,
            ...formData
        });
    };

    return (
        <div className='editor'>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Cost:
                <input type="text" name="cost" value={formData.cost} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Type:
                <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Power:
                <input type="text" name="power" value={formData.power} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Health:
                <input type="text" name="health" value={formData.health} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Primary Text:
                <input type="text" name="textPrimary" value={formData.textPrimary} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Secondary Text:
                <input type="text" name="textSecondary" value={formData.textSecondary} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Flavour Text:
                <input type="text" name="textFlavour" value={formData.textFlavour} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Card ID:
                <input type="text" name="cardId" value={formData.cardId} onChange={handleInputChange} />
            </label>
            <br />
        </div>
    );
}