import React from 'react';
import { ReactComponent as Found } from 'assets/imgs/not_found.svg';
import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'assets/styles/Tema.module.scss';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.voltar}>
        <button onClick={()=>{navigate(-1);}}>{'< Voltar'}</button>
      </div>
      <div
        className={classNames({
          [styles.container]: true,
          [stylesTema.container]: true,
        })}
      >
        <Found />
      </div>
    </>
  );
};

export default NotFound;
