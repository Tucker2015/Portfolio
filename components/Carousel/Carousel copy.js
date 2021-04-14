import { Container, Carousel } from "react-bootstrap";
import Image from "next/image";

export default function CarouselView() {

    const data = [

        { id: 1, image: "/168375219_116502063866050_2832021633934444499_n.jpg" },
        { id: 2, image: "/170446788_119169200266003_2729084070544270951_n.jpg" },
    ];


    return (
        <> {data.map((user) => (
            <Carousel fade>
                <Carousel.Item>
                    <Image
                        height={800}
                        width={800}
                        layout="fixed"
                        className="d-block w-100 "
                        src={user.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Logo</h3>
                        <p>Our Logo</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>))}
        </>
    )
}