import { BrowserRouter as Router } from 'react-router-dom';

import Routes from "./routes";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle/>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
