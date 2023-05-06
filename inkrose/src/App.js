import React, {useEffect, useState} from 'react';
import './App.css';
import placeholderArt from './assets/author.png'
import Card from './Card.js';
import {SymbolText} from './SymbolText';
import CardEditor from './CardEditor';

function App() {
  const st = new SymbolText();
  const [card, setCard] = useState(new Card("The Chaos Blossom", "{K}{Y}{M}{C}{1}", "Portrait?", 4, 2, [], "It's not even a rose.", "One of many to come.", "Inkcredible.", "ALPHA01", 0))
  
  // Uploaded by the creator
  const [cardArt, setCardArt] = useState(placeholderArt);

  // Not every card has stats. {Power/Health}
  // If a card doesn't have stats, these will not be shown.
  const [hasStats, setHasStates] = useState(false);

  // Cards can have anywhere from 0 to 3 sigils.
  // The banner decreases or increases in size depending on the amount of sigils present on the card.
  // Sigils are user uploaded.
  const [sigils, setSigils] = useState(0);

  return (
    <div className='app'>
      <div className='container'>
        <div className='container-item edit'>
          {/* CONTROLS GO HERE */}

          <CardEditor card={card} setCard={setCard}/>

        </div>
        <div className='container-item preview'>
          <div className='card-overlay'>

            {/* CUSTOM CARD VARIABLES GO HERE  */}
            <div className='card-name'> <div>{card.name}</div> </div>
            <div className='card-cost'> {st.translate(card.cost)} </div>
            <div className='card-art'> <img src={cardArt}></img> </div>
            <div className='card-type'> <div>{card.type}</div> </div>

            <div className='card-power'> </div>
            <div className='card-health'> </div>


            <div className='card-text-primary'> </div>
            <div className='card-text-secondary'> </div>
            <div className='card-text-flavour'> </div>


            <div className='card-id'> </div>
            <div className='card-rarity'> </div>
          </div>

          <img className='card-wobble' src='/wobbles/MY-M.png' alt='card wobble'></img>
          <img className='card-frame' src='/frame.png' alt="card frame"/>
        </div>
      </div>
    </div>
  );
}

export default App;
