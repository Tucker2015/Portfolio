import React, { useState, Component } from 'react'
import { Container, Carousel } from "react-bootstrap";


const data = {

    slides: [
        {
            img: 'https://zephyo.github.io/22Days/code/8/graphics/1tumblr.gif',
            header: 'Responsive',
            text: 'Responsive for mobile and desktop, facilitated by Bootstrap.'
        },
        {
            img: 'https://zephyo.github.io/22Days/code/8/graphics/2tumblr.gif',
            header: 'Discover',
            text: 'Find and share awesome posts.'
        },
        {
            img: 'https://zephyo.github.io/22Days/code/8/graphics/3tumblrbyMathewLucas.gif',
            header: 'Welcome to Tumblr.',
            text: 'What are you waiting for? Sign up now.'
        },
    ]
};

class CarouselView extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }


    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        var items = this.state.slides.map(function (slide, i) {
            return (
                <Carousel.Item
                    className='item'>
                    <img className='image' alt="image" src={slide.img} />
                    <Carousel.Caption>
                        <p className='heading'>{slide.header}</p>
                        <p>{slide.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });

        return (
            <div className="App">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    showControls={true}
                    showIndicators={true}
                    className={this.state.carouselClass}
                >
                    {items}
                </Carousel>
                <i className="fab fa-tumblr logo"></i>

                <div className="overlay" data-step={this.state.index}></div>
            </div>
        )
    }
}

export default CarouselView