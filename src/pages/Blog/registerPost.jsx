import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
import Editor from '../../components/EditorText';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const RegisterPost = withRouter(({ history }) => {

    const [text, setText] = useState("")

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    function handleCreateClass(e) {
        e.preventDefault();

    }

    return (
        <div id="register-post-form" className="container">
            <PageHeader
                title="Cadastrar publicação"
                description="O primeiro passo é preencher esse formulário com os dados necessarios para a publicação :)"
                link="/choice"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Dados básicos para publicação</legend>

                        <Input
                            required
                            name="title"
                            label="Título"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Textarea
                            required
                            name="resumo"
                            label="Resumo"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                        <Editor
                            label="Conteúdo"
                            name="corpo"
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                        />
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div >
    )
})

export default RegisterPost;