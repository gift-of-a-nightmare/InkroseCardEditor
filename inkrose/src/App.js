import React, {useEffect, useState} from 'react';
import './App.css';
import placeholderArt from './assets/author.png'
import placeholderWobble from './assets/wobbles/MY-M.png'
import Card from './Card.js';
import {SymbolText} from './SymbolText';
import CardStatEditor from './CardStatEditor';
import CardWobbleEditor from './CardWobbleEditor';
import CardAssetEditor from './CardAssetEditor';

function App() {
  const st = new SymbolText();
  const [card, setCard] = useState(new Card("The Author", "{K}{Y}{M}{C}{1}", "Prime Portrait - Alpha Omega", 4, 2, [], "It's not even a rose.", "One of many to come.", "Inkcredible.", "ALPHA01", 0))
  
  // Uploaded by the creator
  const [cardArt, setCardArt] = useState(placeholderArt);

  // Wobbles are little inky spots on the card, colour identity I think.
  const [wobble, setWobble] = useState(placeholderWobble)

  // Cards can have anywhere from 0 to 3 sigils.
  // The banner decreases or increases in size depending on the amount of sigils present on the card.
  // Sigils are user uploaded.
  const [sigils, setSigils] = useState([]);

  return (
    <div className='app'>
      <div className='container'>
        <div className='container-item'>
          {/* CONTROLS GO HERE */}

          <CardStatEditor card={card} setCard={setCard}/>
          <CardWobbleEditor wobble={wobble} setWobble={setWobble}/>

        </div>

        <div className='container-item'>
          <CardAssetEditor setCardArt={setCardArt}/>

        </div>


        <div className='container-item preview'>

          <div className='card-overlay'>
          <img className='card-wobble' src={wobble} alt='card-wobble'></img>

            {/* CUSTOM CARD VARIABLES GO HERE  */}
            <div className='card-name'> <div>{card.name}</div> </div>
            <div className='card-cost'> {st.translate(card.cost)} </div>
            <div className='card-art'> <img src={cardArt}></img> </div>
            <div className='card-type'> <div>{card.type}</div> </div>


            {(card.health && card.power) &&
            <div className='card-stats'>
                <div className='card-power'>{card.power}</div>
                <div className='card-health'>{card.health}</div>
                <img />
            </div>
            }



            <div className='card-text-primary'> </div>
            <div className='card-text-secondary'> </div>
            <div className='card-text-flavour'> </div>


            <div className='card-id'> </div>
            <div className='card-rarity'> </div>
          </div>

          <img className='card-frame' src='/frame.png' alt="card-frame"/>
        </div>
      </div>
    </div>
  );
}

export default App;
