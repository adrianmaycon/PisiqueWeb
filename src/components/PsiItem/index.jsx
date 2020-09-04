import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

import { FaMapMarkerAlt } from "react-icons/fa";

const PsiItem = ({ teacher }) => {
    function createNewConnection() {
        console.log("Clicou")
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.nickname}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <p>{teacher.city}/{teacher.uf} <FaMapMarkerAlt /></p>

            <footer>
                {teacher.cost > 0 ?
                    <p>
                        Preço/hora
                    <strong>R$ {teacher.cost},00</strong>
                    </p>
                    :
                    <p>
                        <strong>Atendimento gratuito</strong>
                    </p>
                }
                <a onClick={createNewConnection} target="blank" href={`https://wa.me/${teacher.whatsapp}?text=Olá! vim pelo Grupo Pisiquê e Gostaria de me consultar com você`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default PsiItem;