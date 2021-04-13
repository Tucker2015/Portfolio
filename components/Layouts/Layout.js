import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Navigation } from "../../components";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Test Website</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <Navigation />
            <Container className="md-container">
                <Container>
                    {children}
                </Container>
            </Container>
        </>
    );
}