import React from 'react';
import Header from 'components/NavBar';
import { Container } from './styled';
// import CookiesPage from '../../components/Cookies';
import path from 'assets/images/apresent.svg';
import insta from 'assets/icons/insta.png';
import youtube from 'assets/icons/youtube.png';
import likedlin from 'assets/icons/likedlin.png';
import classNames from 'classnames';

function Home() {
    return (
        <Container>
            <Header />

            <div className='header-cabeca'>
                <div className='container-info-redes'>
                    <div>
                        <h2>Instituto Pisiquê</h2>
                        <p>Quem cuida da mente, cuida da vida.</p>

                        <div className={classNames('image-container', 'mobille')}>
                            <img src={path} alt="" className={'image'} />
                        </div>

                        <p className='siga-nos'>Siga-nos:</p>
                        <a className='icon' href="https://www.instagram.com/institutopisique/" target="blank"><img alt="" src={insta} width="48px" height="48px" /></a>
                        <a className='icon' href="https://www.linkedin.com/company/institutopisique/" target="blank"><img alt="" src={likedlin} width="48px" height="48px" /></a>
                        <a className='icon' href="https://www.youtube.com/channel/UCGCELd5mVenmreaJVihH_dg" target="blank"><img alt="" src={youtube} width="68px" height="48px" /></a>

                        <div className='box-bott'>
                            <button type='button' id="btn-voluntario">Voluntário</button>
                            <button type='button' id="btn-apoiador">Apoiador</button>
                        </div>
                    </div>
                </div>

                <div className={classNames('image-container', 'desktop')}>
                    <img alt="" src={path} className={'image'} />
                </div>
            </div>
        </Container>
    )
}

export default Home;