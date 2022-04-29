import classNames from "classnames";
import React from "react";
import styles from "./item.module.scss";

interface itens {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
    id: number;
    label: string;
  };
}

const Item = ({ item }: { item: itens }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={item.photo} alt="imagem" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
              [styles.item__tipo]:true,
              [styles[`item__tipo__${item.category.label.toLowerCase()}`]]: true
          })}>
              {item.category.label}</div>
          <div className={styles.item__porcao}>{item.size}</div>
          <div className={styles.item__qtdpessoas}>{item.serving}</div>
          <div className={styles.item__valor}>
            {"R$" + item.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;