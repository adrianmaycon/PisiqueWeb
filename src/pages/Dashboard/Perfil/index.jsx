import React, { useState, useEffect, useContext } from 'react';

// import { FaCaretDown, FaCaretUp } from "react-icons/fa";
// import { Link } from 'react-router-dom';

import UsersService from '../../../services/UsersService';
import { AuthContext } from '../../../auth/AuthContext';
// import { authConfig } from '../../../auth/config';
import { Container, Header, ContainerImage, Avatar } from './styled';

// import ModalAvatars from '../../../components/common/ModalAvatars'

function Perfil() {

    // const [openConfig, setOpenConfig] = useState(false)
    const [dataUser, setDataUser] = useState({})

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (!!usuario) {
            UsersService.GetDataUser(usuario.email)
                .then(user => {
                    // console.log(user)
                    setDataUser(user)
                })
        }

    }, [usuario])

    return (
        <>
            {/* <ModalAvatars /> */}
            <Container>
                <Header>
                    <h1>{String(dataUser.fullName).split(" ", 4).join(' ')}</h1>
                </Header>

                <ContainerImage>
                    <Avatar src={"https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_450x337.jpg"} alt="" />
                </ContainerImage>
            </Container>
        </>
    )
}

export default Perfil;