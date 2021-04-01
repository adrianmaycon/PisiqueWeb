import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
// import { Container } from './styles';

function Blog() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <NavBar
                openProps={open}
                close={() => setOpen(false)}
            />

        </div>
    );
}

export default Blog;