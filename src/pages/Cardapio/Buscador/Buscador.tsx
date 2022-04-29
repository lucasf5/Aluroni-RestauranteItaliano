import React from 'react';
import style from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({busca, setBusca}: Props) => {
  return (
    <div className={style.buscador}>
      <input
        value={busca}
        placeholder="Escolha sua comida"
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};

export default Buscador;