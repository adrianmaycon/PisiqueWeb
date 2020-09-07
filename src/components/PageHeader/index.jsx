import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { FaReply } from "react-icons/fa";

import './styles.css';

const PageHeader = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to={props.link}>
                    <FaReply className="icon" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}

                {props.children}
            </div>

        </header>
    )
}

export default PageHeader;