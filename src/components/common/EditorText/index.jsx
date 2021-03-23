import React from 'react';

import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"

import './styles.css';

const Editor = ({ label, name, ...rest }) => {
    return (
        <div className="editor-block">
            <label htmlFor={name}>{label}</label>
            <CKEditor id={name} editor={ClassicEditor} {...rest} />
        </div>
    );
}

export default Editor;