import React, { useEffect, useState } from 'react';
import { Modal, Container, Close, Avatar } from './styled';
import UsersService from '../../../Services/UsersService';
import close from '../../../assets/images/icons/close.svg';

function ModalAvatars() {

    const [open, setOpen] = useState(true)
    const [type, setType] = useState('m')

    const [dataMan, setDataMan] = useState([])
    const [dataWoman, setDataWoman] = useState([])
    const [dataOther, setDataOther] = useState([])

    useEffect(() => {
        UsersService.getAvatars()
            .then((response) => {
                // console.log(response);
                setDataMan(response.man);
                setDataWoman(response.woman);
                setDataOther(response.other)
            })
    }, [])

    return (
        <Modal open={open}>
            <Container>
                <header>
                    <h1 className="title">Escolha um avatar</h1>
                    <Close src={close} alt="fechar modal avatares" onClick={() => setOpen(false)} />
                </header>

                <form>
                    <input checked={type === "m" ? true : false} type="radio" id="m" name="gender" value="m" onChange={(e) => setType(e.target.value)} />
                    <label htmlFor="m">Masculino</label>
                    <input checked={type === "f" ? true : false} type="radio" id="f" name="gender" value="f" onChange={(e) => setType(e.target.value)} />
                    <label htmlFor="f">Feminino</label>
                    {/* <input checked={type === "o" ? true : false} type="radio" id="o" name="gender" value="o" onChange={(e) => setType(e.target.value)} />
                    <label htmlFor="o">Outro</label> */}
                </form>

                <main>
                    {type === "m" && dataMan.map((url) => <Avatar key={url} src={url} alt="" onClick={() => console.log(url)} color="#7a80c8" />)}
                    {type === "f" && dataWoman.map((url) => <Avatar key={url} src={url} alt="" onClick={() => console.log(url)} color="#cc59d6" />)}
                    {type === "o" && dataOther.map((url) => <Avatar key={url} src={url} alt="" onClick={() => console.log(url)} color="#e3e3e3" />)}
                </main>

            </Container>
        </Modal>
    );
}

export default ModalAvatars;