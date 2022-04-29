import React from 'react';
import Style from './Cardapio.module.scss';
import 'normalize.css';
import stylesTema from 'assets/styles/Tema.module.scss';

import Buscador from 'pages/Cardapio/Buscador/Buscador';
import { useState } from 'react';
import Filtros from 'pages/Cardapio/Filtros/Filtros';
import Ordenador from 'pages/Cardapio/Ordenador/Ordenador';
import Itens from 'pages/Cardapio/Itens/Itens';
import MaiorOuMenor from 'pages/Cardapio/MaiorOuMenor/MaiorOuMenor';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [idDaCategoria, setIdComida] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  const [maiorOuMenor, setMaiorOuMenor] = useState('');
  return (
    <main>
      <section className={Style.cardapio}>
        <h3 className={stylesTema.titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={Style.cardapio__filtros}>
          <Filtros idComida={idDaCategoria} setIdComida={setIdComida} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
          <MaiorOuMenor setMaiorOuMenor={setMaiorOuMenor} />
        </div>
        <Itens
          busca={busca}
          idComida={idDaCategoria}
          ordenador={ordenador}
          maiorOuMenor={maiorOuMenor}
        />
      </section>
    </main>
  );
}
