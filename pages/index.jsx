import React, { useState } from "react";
import { Layout, CarouselView } from "../components";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Layout>
        <Container>
          <h1 className="text-center">Kevins Portfolio Website</h1>
          <CarouselView />
        </Container>
      </Layout>
    </>
  );
}
