import { useState } from 'react';
import axios from 'axios';

function App() {

  const [apiData, setApiData] = useState(null);

  const GetDatas = async () => {
    let data = await axios.get("nodeapp:8080/books");
    console.log(data);
    setApiData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
          This is react
      </header>

      <button onClick={() => GetDatas()}>
        Pull data from api
      </button>

      {apiData && <p>{apiData}</p>}
    </div>
  );
}

export default App;
