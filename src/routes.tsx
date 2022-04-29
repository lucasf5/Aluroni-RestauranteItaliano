import './index.css';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Inicio from 'pages/Inicio/Inicio';
import NotFound from 'pages/NotFound/NotFound';
import Sobre from 'pages/Sobre/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardapio from './pages/Cardapio/Cardapio';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
