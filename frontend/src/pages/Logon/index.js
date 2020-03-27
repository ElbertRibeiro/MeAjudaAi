import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './../Logon/styles.css';

import heroesImg from './../../assets/heroes.png';
import logoImg from './../../assets/logo.svg';

export default function Logon() {
    return (
       <div className="logon-container" >
           <selection className="form" >
                <img src={logoImg} alt="Me Ajuda Ai!"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </a>

                </form>
           </selection>

           <img src={heroesImg} alt="Heroes" />

       </div>
    );
}

