import styled from 'styled-components';

export const Container = styled.div `
    .wrap {
        height: 100%;
        max-width: 1280px;
        margin: 0 auto;
        text-align: center;
        position: relative;
    }

    .wrap .perspective {
        width: 100%;
        height: 100%;
        perspective: 1000px;
        transform-style: preserve-3d;
        overflow: hidden;
    }

    .book-wrap {
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        transition: all ease-out 0.6s;
        -webkit-transition: all ease-out 0.6s;
        -moz-transition: all ease-out 0.6s;
        -ms-transition: all ease-out 0.6s;
        -o-transition: all ease-out 0.6s;
    }

    .book {
        width: 400px;
        height: 600px;
        background-image: url("http://img07.deviantart.net/747c/i/2015/114/b/0/typography_book_cover_thing_y_by_jiyulie-d5cujji.jpg") no-repeat center center;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
    }

    .title {
        height: 600px;
        width: 30px;
        position: absolute;
        right: 0;
        left: -401px;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #AB4747;
        transform: rotateY(-80deg) translateX(-14px);
    }

 .book-back {
	 width: 400px;
	 height: 600px;
	 background-color: #D06255;
	 position: absolute;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 margin: auto;
	 cursor: pointer;
	 transform: rotate(180deg) translateZ(-30px) translateX(5px);
}
 .book-back .text {
	 transform: rotateX(180deg);
	 position: absolute;
	 bottom: 30px;
	 padding: 20px;
	 text-align: left;
}
 .book-back .text h3 {
	 margin-bottom: 20px;
	 color: #fff;
}
 .book-back .text span {
	 display: block;
	 margin-bottom: 20px;
	 color: #fff;
}
 .book-back .text span:last-of-type {
	 margin-top: 30px;
}
 .rotate {
	 transform: rotateY(20deg);
}
 .flip {
	 transform: rotateY(180deg);
}
`;