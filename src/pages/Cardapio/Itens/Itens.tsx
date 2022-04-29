import React, { useEffect, useState } from 'react';
import cardapio from 'assets/db.json';
import Item from './Item/Item';
import styles from './Itens.module.scss';

interface Props {
  busca: string;
  idComida: number | null;
  ordenador: string;
  maiorOuMenor: string;
}

const Itens = ({ busca, idComida, ordenador, maiorOuMenor }: Props) => {
  const [lista, setLista] = useState(cardapio.itens);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaComida(idDaCategoria: number) {
    // O id da comida é passada é o id da CATEGORIA, que pode ser id da categoria carnes, combos, veganos e etc, então quando recebe o id ele ta verificando se o id passado é o mesmo do id da categoria de cada item. Retorna somente os que forem iguais.
    if (idComida !== null) return idComida === idDaCategoria;
    return true;
  }

  function ordenar(novaLista: typeof cardapio.itens) {
    switch (ordenador) {
    case 'Porção':
      if (maiorOuMenor === 'menor') {
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      } else {
        return novaLista.sort((a, b) => (a.size < b.size ? 1 : -1));
      }
    case 'Qtd. pessoas':
      if (maiorOuMenor === 'menor') {
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      } else {
        return novaLista.sort((a, b) => (a.serving < b.serving ? 1 : -1));
      }

    case 'Preço':
      if (maiorOuMenor === 'menor') {
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      } else {
        return novaLista.sort((a, b) => (a.price < b.price ? 1 : -1));
      }

    default:
      return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.itens.filter(
      (item) => testaBusca(item.title) && testaComida(item.category.id)
    );

    setLista(ordenar(novaLista));
  }, [busca, idComida, ordenador, maiorOuMenor]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Itens;
