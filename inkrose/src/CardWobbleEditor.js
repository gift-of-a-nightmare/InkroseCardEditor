import './CardWobbleEditor.css'

export default function CardWobbleEditor({wobble, setWobble}) {

    // Get all the PNG files inside the "wobbles" folder
    const w = require.context('./assets/wobbles', true, /\.png$/);
    const wobbles = w.keys().map(w);
    const names = []

    w.keys().forEach((w, index) => {
      let result = w.replace(/^\.\//, "").replace(/\.png$/, "");
      names[index] = result;
    })

    // Handler function for selecting a wobble
    const handleWobbleSelect = (event) => {
        setWobble(event.target.value);
    };

    return (
        <div className='selector'>
            <label>Wobble</label>
          <select id="wobble-select" onChange={handleWobbleSelect}>
            {wobbles.map((wobble, index) => (
              <option key={wobble} value={wobble}>
                {names[index]}
              </option>
            ))}
          </select>
        </div>
      );
}