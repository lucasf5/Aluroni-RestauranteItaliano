import styles from "./Filtros.module.scss";
import filtros from "../../assets/db.json";
import { Dispatch, SetStateAction, useEffect } from "react";
import classNames from "classnames"

interface PadraoOpcao {
  label: string; // "label": "Massas",
  id: number; // "id": 1
}

interface filtros {
  idComida: number | null;
  setIdComida: Dispatch<SetStateAction<number | null>>;
}

export default function Filtros({idComida, setIdComida}:filtros) {

  function selecionarFiltro(comida: PadraoOpcao) {
    if(idComida === comida.id) return setIdComida(null);
    return setIdComida(comida.id)
  }

  return (
    <div className={styles.filtros}>
      {filtros.comidas.map((comida) => (
        <button

          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: idComida === comida.id
          })}

          key={comida.id}
          onClick={() => selecionarFiltro(comida)}
        >
          {comida.label}
        </button>
      ))}
    </div>
  );
}
