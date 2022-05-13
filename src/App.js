
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import Home from './Home';

import { BrowserRouter, Route, Routes} from 'react-router-dom';






function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route path = "/form" element = {<Form />} />
      </Routes>
      </div>
       <Footer />
    </div>
  
   
    
    
    </BrowserRouter>
  );
}

export default App;
