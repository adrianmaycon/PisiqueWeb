import React from 'react';
import { Container } from './styled';

function ModalVideo({close}) {

    return (
        <Container onClick={close}>
            <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/GwpdmkBUtL8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </Container>
    )
}

export default ModalVideo;