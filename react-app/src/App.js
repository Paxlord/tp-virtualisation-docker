import { useState } from 'react';
import axios from 'axios';

function App() {

  const [apiData, setApiData] = useState(null);

  const GetDatas = async () => {
    let data = await axios.get("http://localhost:4300/books");
    console.log(data);
    setApiData(data.data);
  }

  return (
    <div className="App">
      <header className="App-header">
          This is react
      </header>

      <button onClick={() => GetDatas()}>
        Pull data from api
      </button>

      {apiData && <p>{JSON.stringify(apiData)}</p>}
    </div>
  );
}

export default App;
