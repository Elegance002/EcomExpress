import React, { Component, Fragment } from 'react'
import {Container,Col,Row,Card} from 'react-bootstrap';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class NewArrival extends Component {

    //next and previous button
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:3000,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Container className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection" fluid={true}>
                <h4 className="section-title px-0 mx-0">NEW ARRIVAL
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </h4>
                <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                <Slider ref={c=>this.slider=c} {...settings}>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="card  w-100  image-box ">
                            <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                <p className="product-price-on-card">Price: 3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Container>
        )
    }
}
