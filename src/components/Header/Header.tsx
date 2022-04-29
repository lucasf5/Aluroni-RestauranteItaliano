import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Style from './header.module.scss';
import { Link, Outlet } from 'react-router-dom';
import stylesTema from 'assets/styles/Tema.module.scss';

const Header = () => {
  return (
    <>
      <header>
        <nav className={Style.menu}>
          <Logo />

          <ul className={Style.menu__list}>
            <Link className={Style.menu__link} to="/">
              Recomendados
            </Link>

            <Link className={Style.menu__link} to="/cardapio">
              Cardapio
            </Link>

            <Link className={Style.menu__link} to="/sobre">
              Sobre
            </Link>
          </ul>
        </nav>
        <section className={Style.header}>
          <div className={Style.header__text}>A casa do código e da massa</div>
        </section>
      </header>
      <main className={stylesTema.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
