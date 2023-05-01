import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='container-item edit'>
          <p>VALUES: Name, Cost, Art, Type, Sub-type, (power / toughness), (sigils), text1, text2, flavour text, card ID</p>
        </div>
        <div className='container-item preview'>
          <img src='/frame.png' alt="card frame"/>
        </div>
      </div>
    </div>
  );
}

export default App;
