import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import cardStatAsset from './assets/card/ph.png'
import placeholderArt from './assets/author.png'
import placeholderWobble from './assets/wobbles/MY-M.png'
import Card from './Card.js';
import {SymbolText} from './SymbolText';
import CardStatEditor from './CardStatEditor';
import CardWobbleEditor from './CardWobbleEditor';
import CardAssetEditor from './CardAssetEditor';
import exportAsImage from './ExportAsImage';

// Banner assets to put sigils on
import bannerOne from './assets/card/1glyph.png';
import bannerTwo from './assets/card/2glyph.png';
import bannerThree from './assets/card/3glyph.png';

function App() {
  const st = new SymbolText();
  const canvas = useRef();
  const [card, setCard] = useState(new Card("The Author", "{K}{Y}{M}{C}{1}", "Prime Portrait - Alpha Omega", 4, 2, [], "It's not even a rose.", "One of many to come.", "Inkcredible.", "ALPHA01", 0))
  
  // Uploaded by the creator
  const [cardArt, setCardArt] = useState(placeholderArt);

  // Wobbles are little inky spots on the card, colour identity I think.
  const [wobble, setWobble] = useState(placeholderWobble)

  // Cards can have anywhere from 0 to 3 sigils.
  // The banner decreases or increases in size depending on the amount of sigils present on the card.
  // Sigils are user uploaded.
  const [sigils, setSigils] = useState([]);
  
  const [banner, setBanner] = useState(bannerOne);

  useEffect(() => {
    switch (sigils.length){
      case 1: setBanner(bannerOne)
        break;
      case 2: setBanner(bannerTwo)
        break;
      case 3: setBanner(bannerThree)
        break;
    }
  }, [sigils])

  return (
    <div className='app'>
      <div className='container'>
        <div className='container-item'>
          {/* CONTROLS GO HERE */}

          <CardStatEditor card={card} setCard={setCard}/>
          <CardWobbleEditor wobble={wobble} setWobble={setWobble}/>
          <br/>
          <button onClick={() => exportAsImage(canvas.current, card.name)}>YOU_DONT_HAVE_TO_SMILE</button>
          <br/>
          <label>{sigils.length}</label>

        </div>

        <div className='container-item'>
          <CardAssetEditor setCardArt={setCardArt} setCardSigils={setSigils}/>
        </div>

        <div ref={canvas} id="canvas" className='container-item preview'>

          <div >

          </div>
          <div className='card-overlay'>
          <img className='card-wobble' src={wobble} alt='card-wobble'/>

          {/* Only show the banner if the card actually has sigils. */}
          {sigils.length > 0 &&
          
          <div> 
            <img className='card-banner' src={banner}/>
            <div className='card-sigils'>
              <img src={sigils[0].image}/> 
              {sigils.length > 1 && <img src={sigils[1].image}/>}
              {sigils.length > 2 && <img src={sigils[2].image}/>}
            </div>
          </div>
          }
          

            {/* CUSTOM CARD VARIABLES GO HERE  */}
            <div className='card-name'> <div>{card.name}</div> </div>
            <div className='card-cost'> {st.translate(card.cost)} </div>
            <div className='card-art'> <img src={cardArt}></img> </div>
            <div className='card-type'> <div>{card.type}</div> </div>


            {(card.health && card.power) &&
            <div>
              <img className='card-stats-asset' src={cardStatAsset}/>
              <div>
                  <div className='card-power'>{card.power}</div>
                  <div className='card-health'>{card.health}</div>
              </div>
            </div>
            }



            <div className='card-text-box'>
              <div className='card-text-container'>

                <div style={{gridTemplateColumns: sigils.length > 0 ? "1fr 4fr" : "1fr"}} className='card-text-primary'>
                  {(sigils.length > 0) &&
                    <div className="sigil-box"/>
                  }
                  <div>
                    {card.textPrimary}
                  </div>
                </div>

                <div style={{gridTemplateColumns: sigils.length > 1 ? "1fr 4fr": "1fr"}} className='card-text-secondary'>
                  {(sigils.length > 1) &&
                    <div className="sigil-box"/>
                  }
                  <div>
                    {card.textSecondary}
                  </div>
                </div>

                <div style={{gridTemplateColumns: sigils.length > 2 ? "1fr 4fr": "1fr"}} className='card-text-flavour'>
                  {(sigils.length > 2) &&
                    <div className="sigil-box"/>
                  }
                  <div>
                    {card.textFlavour}
                  </div>
                </div>

              </div>
            </div>


            <div className='card-id'>{card.cardId}</div>
            <div className='card-rarity'></div>
          </div>

          <img className='card-frame' src='/frame.png' alt="card-frame"/>
        </div>
      </div>
    </div>
  );
}

export default App;
