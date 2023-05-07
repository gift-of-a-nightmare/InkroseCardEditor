import React, { useState } from 'react';
import './CardAssetEditor.css'

function CardAssetEditor({setCardArt}) {
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

  function handleSigilUpload(event) {
    const files = event.target.files;
    const images = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = (event) => {
        images.push(event.target.result);
  
        if (images.length === files.length) {
          setSigils(images);
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
        {sigils.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CardAssetEditor