import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Navigation } from "../../components";
import styles from './Layout.module.css';

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
            <footer>
                <div className={styles.footer}>
                    <div className="container mx-auto px-6 pt-10 pb-6 text-white">
                        © 2021. Kevin Tucker
                    </div>
                </div>
            </footer>
        </>
    );
}