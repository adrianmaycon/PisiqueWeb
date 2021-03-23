import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Textarea from '../../components/common/Textarea';
import Input from '../../components/common/Input';
import Editor from '../../components/common/EditorText';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const RegisterPost = withRouter(({ history }) => {

    const [text, setText] = useState("")

    const [name, setName] = useState('');
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
                            required
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
                            Salvar publicação
                    </button>
                    </footer>
                </form>
            </main>
        </div >
    )
})

export default RegisterPost;