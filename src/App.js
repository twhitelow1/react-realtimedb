import './App.css';
import Contacts from './components/Contacts';
import Footer from './components/Footer'

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Contacts> </Contacts>
        <Footer />
      </div>

    </div>
  );
}

export default App;
