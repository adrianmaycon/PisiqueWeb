import React from 'react';
import { Container, Body, BoxCont, Circle, Bar, Center, Linh } from './styled';
import { FaLightbulb, FaPeopleCarry, FaUsers, FaLaptopCode, FaRocket } from "react-icons/fa";

function Timeline() {
    return (
        <Container>
            <BoxCont>
                <div />
                <Center>
                    <Circle color="#18bb18">
                        <FaLightbulb className="icon-timeline" />
                    </Circle>

                    <Linh />
                </Center>
                <Center end>
                    <h1>2018</h1>
                </Center>
                <Center>
                    <Circle color="#688db3">
                        <FaUsers className="icon-timeline" />
                    </Circle>

                    <Linh />
                </Center>
                <Center end>
                    <h1>2020</h1>
                </Center>
                <Center>
                    <Circle color="#7548b1">
                        <FaRocket className="icon-timeline" />
                    </Circle>

                    <Linh />
                </Center>
                <div />
            </BoxCont>
            <Body>
                <Bar opacityOn />
                <Bar color="#3d80c4" />
                <Bar color="#054d96" />
                <Bar color="#3d80c4" />
                <Bar color="#054d96" />
                <Bar color="#3d80c4" />
                <Bar opacityOn />
            </Body>
            <BoxCont>
                <div />
                <Center>
                    <h1>2017</h1>
                </Center>
                <Center>
                    <Linh />
                    
                    <Circle color="red">
                        <FaPeopleCarry className="icon-timeline" />
                    </Circle>
                </Center>
                <Center>
                    <h1>2019</h1>
                </Center>
                <Center>
                    <Linh />

                    <Circle color="#ff0062">
                        <FaLaptopCode className="icon-timeline" />
                    </Circle>
                </Center>
                <Center>
                    <h1>2021</h1>
                </Center>
                <div />
            </BoxCont>
        </Container>
    );
}

export default Timeline;