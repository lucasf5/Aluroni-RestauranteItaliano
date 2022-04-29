import React from 'react';
import cardapio from 'assets/db.json';
import styles from './inicio.module.scss';
import stylesTema from 'assets/styles/Tema.module.scss';
import nossacasa from 'assets/imgs/nossa_casa.png';

const Inicio = () => {
  const pratosRecomendados = [...cardapio.itens]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendacoes da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((prato) => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button className={styles.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossacasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br />
          Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Inicio;
