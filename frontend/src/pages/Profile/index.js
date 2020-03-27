import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function Profiler() {
    return (
        <div className="profile-container" >
            <header>
                <img src={logoImg} alt="Me Ajuda Ai!" />
                <span>Bem Vinda, AFAAN</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            
        </div>
    );
}