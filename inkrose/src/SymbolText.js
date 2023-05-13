import React, { Fragment } from 'react';

import hollow from './assets/symbols/ho.png'
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
import B from './assets/symbols/B.png'
import N from './assets/symbols/N.png'
import C from './assets/symbols/C.png'
import M from './assets/symbols/M.png'
import Y from './assets/symbols/Y.png'
import K from './assets/symbols/K.png'

import bs from './assets/symbols/bs.png';
import dr from './assets/symbols/dr.png';
import rf from './assets/symbols/rf.png';

export class SymbolText {
  map = {
    '{HO}': (size) => <img src={hollow} alt="zero" style={{ width: size, height: size }} />,
    '{0}': (size) => <img src={zero} alt="zero" style={{ width: size, height: size }} />,
    '{1}': (size) => <img src={one} alt="one" style={{ width: size, height: size }} />,
    '{2}': (size) => <img src={two} alt="two" style={{ width: size, height: size }} />,
    '{3}': (size) => <img src={three} alt="three" style={{ width: size, height: size }} />,
    '{4}': (size) => <img src={four} alt="four" style={{ width: size, height: size }} />,
    '{5}': (size) => <img src={five} alt="five" style={{ width: size, height: size }} />,
    '{6}': (size) => <img src={six} alt="six" style={{ width: size, height: size }} />,
    '{7}': (size) => <img src={seven} alt="seven" style={{ width: size, height: size }} />,
    '{8}': (size) => <img src={eight} alt="eight" style={{ width: size, height: size }} />,
    '{9}': (size) => <img src={nine} alt="nine" style={{ width: size, height: size }} />,
    '{C}': (size) => <img src={C} alt="C" style={{ width: size, height: size }} />,
    '{M}': (size) => <img src={M} alt="M" style={{ width: size, height: size }} />,
    '{Y}': (size) => <img src={Y} alt="Y" style={{ width: size, height: size }} />,
    '{K}': (size) => <img src={K} alt="K" style={{ width: size, height: size }} />,
    '{N}': (size) => <img src={N} alt="K" style={{ width: size, height: size }} />,
    '{B}': (size) => <img src={B} alt="K" style={{ width: size, height: size }} />,
    '{BS}': (size) => <img src={bs} alt="brush stroke" style={{ width: size, height: size }} />,
    '{DR}': (size) => <img src={dr} alt="drain" style={{ width: size, height: size }} />,
    '{RF}': (size) => <img src={rf} alt="refill" style={{ width: size, height: size }} />
  }

  symbolRegex = new RegExp(`(${Object.keys(this.map).map(x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  translate(input, size) {
    return (
      <Fragment>
        {input.split(this.symbolRegex).map((part, index) => {
          if (this.map[part]) {
            return this.map[part](size);
          }
          return part;
        })}
      </Fragment>
    );
  }
}