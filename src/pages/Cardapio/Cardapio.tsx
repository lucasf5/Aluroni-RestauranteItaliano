import React from "react";
import Style from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import "normalize.css";
import Buscador from "pages/Buscador/Buscador";
import { useState } from "react";
import Filtros from "pages/Filtros/Filtros";
import Ordenador from "pages/Ordenador/Ordenador";
import Itens from "pages/Itens/Itens";
import MaiorOuMenor from "pages/MaiorOuMenor/MaiorOuMenor";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [idDaCategoria, setIdComida] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  const [maiorOuMenor, setMaiorOuMenor] = useState("")
  return (
    <main>
      <nav className={Style.menu}>
        <Logo />
      </nav>
      <header className={Style.header}>
        <div className={Style.header__text}>A casa do código e da massa</div>
      </header>
      <section className={Style.cardapio}>
        <h3 className={Style.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={Style.cardapio__filtros}>
          <Filtros idComida={idDaCategoria} setIdComida={setIdComida}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
          <MaiorOuMenor setMaiorOuMenor={setMaiorOuMenor}/>
        </div>
        <Itens busca={busca} idComida={idDaCategoria} ordenador={ordenador} maiorOuMenor={maiorOuMenor}/>
      </section>
    </main>
  );
}
