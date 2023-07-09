import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(window.location.pathname.slice(1));

  function getContent() {
    if (page == 'About') return <About />;
    if (page == 'Contact') return <Contact />;
    return <Home />;
  }

  function toPage(pageName) {
    window.history.pushState(null, '', `/${pageName}`);
    setPage(pageName);
  }

  return (
    <>
      <NavBar toPage={toPage} />
      {getContent()}
    </>
  );
}
export default App;
