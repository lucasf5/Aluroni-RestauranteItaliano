import React, { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from '../../../assets/db.json';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface ordenador {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador = ({ ordenador, setOrdenador }: ordenador) => {
  const [aberto, setAberto] = useState(false);
  return (
    <div>
      <button
        className={classNames({
          [styles.ordenador]: true,
          [styles['ordenador--ativo']]: ordenador !== '',
        })}
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
      >
        <span>{ordenador || 'Ordenado Por'}</span>
        {aberto ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}

        <div
          className={classNames({
            [styles.ordenador__options]: true,
            [styles['ordenador__options--ativo']]: aberto,
          })}
        >
          {opcoes.opcoes.map((opcao) => (
            <div
              className={styles.ordenador__option}
              key={opcao.value}
              onClick={() => setOrdenador(opcao.nome)}
            >
              {opcao.nome}
            </div>
          ))}
        </div>
      </button>
    </div>
  );
};

export default Ordenador;
