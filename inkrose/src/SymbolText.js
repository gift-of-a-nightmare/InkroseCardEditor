import React, { Fragment } from 'react';

import t from './assets/symbols/t.png'
import zero from './assets/symbols/0.png'
import one from './assets/symbols/1.png'
import two from './assets/symbols/2.png'
import three from './assets/symbols/3.png'
import four from './assets/symbols/4.png'
import five from './assets/symbols/5.png'
import six from './assets/symbols/6.png'
import seven from './assets/symbols/7.png'
import eight from './assets/symbols/8.png'
import nine from './assets/symbols/9.png'
import C from './assets/symbols/C.png'
import M from './assets/symbols/M.png'
import Y from './assets/symbols/Y.png'
import K from './assets/symbols/K.png'

export class SymbolText {
  map = {
    '{T}': <img src={t} alt="tap symbol" />,
    '{NYA}': 'boop!',
    '{SECRET}': 'I love you, Scarlett.',
    '{0}': <img src={zero} alt="zero" />,
    '{1}': <img src={one} alt="one" />,
    '{2}': <img src={two} alt="two" />,
    '{3}': <img src={three} alt="three" />,
    '{4}': <img src={four} alt="four" />,
    '{5}': <img src={five} alt="five" />,
    '{6}': <img src={six} alt="six" />,
    '{7}': <img src={seven} alt="seven" />,
    '{8}': <img src={eight} alt="eight" />,
    '{9}': <img src={nine} alt="nine" />,
    '{C}': <img src={C} alt="C" />,
    '{M}': <img src={M} alt="M" />,
    '{Y}': <img src={Y} alt="Y" />,
    '{K}': <img src={K} alt="K" />
  }

  // Regular expression to match all keys in the map
  symbolRegex = new RegExp(`(${Object.keys(this.map).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  translate(input) {
    return (
      <Fragment>
        {input.split(this.symbolRegex).map((part, index) => (
          this.map[part] || part
        ))}
      </Fragment>
    );
  }
}