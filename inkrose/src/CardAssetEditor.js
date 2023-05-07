import React, { useEffect, useState } from 'react';
import './CardAssetEditor.css'

function CardAssetEditor({setCardArt}) {

    // Contains the image of a sigil, and whether or not it has been added to the card.
    // [{IMG, TRUE/FALSE}]
    const [sigils, setSigils] = useState([]);

    function handleArtUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            const art = event.target.result;
            setCardArt(art);
        };
        reader.readAsDataURL(file);
    }

    function handleSigilClick(index) {
        let current = sigils.filter(s => s.selected).length;
        if(current < 3 || sigils[index].selected) {
            const updatedArray = sigils.map((s, i) =>
                i === index ? { ...s, selected: !s.selected } : s
            );
            setSigils(updatedArray);
        }
    }

    function handleSigilUpload(event) {
        const files = event.target.files;
        const sigils = [];
    
        for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            let s = {};
            s.image = event.target.result;
            s.selected = false;

            sigils.push(s);
    
            if (sigils.length === files.length) {
            setSigils(sigils);
            }
        };
    
        reader.readAsDataURL(file);
        }
    }

    return (
        <div className='asset-editor'>
            <label>Art</label>
            <input type="file" onChange={handleArtUpload} />
            <br/>
            <label>Sigils</label>
            <input type="file" multiple onChange={handleSigilUpload} />
            <div className='sigil-container'>
            {sigils.map((s, index) => (
            <img style={{backgroundColor: s.selected ? 'white' : '#ffffff42'}}
                onClick={() => handleSigilClick(index)}
                key={index}
                src={s.image}
                alt={`Image ${index + 1}`}
            />
            ))}
            </div>
        </div>
    );
}

export default CardAssetEditor