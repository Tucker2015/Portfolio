import React, { useState } from "react";
import { Layout, CarouselView } from "../components";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { SliderData } from "../components/Carousel/SliderData";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Layout>
        <Container className="sm-container mb-5">
          <h1 className="text-center">Kevins Portfolio</h1>
        </Container>
        <CarouselView slides={SliderData} />
      </Layout>
    </>
  );
}
