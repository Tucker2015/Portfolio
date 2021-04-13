import { Container, Carousel } from "react-bootstrap";
import Image from "next/image";

export default function CarouselView() {

    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <Image
                        height={600}
                        width={800}
                        layout="responsive"
                        className="d-block w-100 "
                        src="/168375219_116502063866050_2832021633934444499_n.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Logo</h3>
                        <p>Our Logo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        height={600}
                        width={800}
                        layout="responsive"
                        className="d-block w-100 "
                        src="/170446788_119169200266003_2729084070544270951_n.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}