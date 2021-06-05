import React from "react";
import { Container, Row, Col } from "reactstrap";
import './Dashboard.scss';

const Dashboard = () => {
    return(
        <Container id="Dashboard-Container">
            <Row>
                <Col xs={12}>
                    <h1>Cryptalyzer</h1>
                    <h2>Dashboard</h2>
                </Col>
            </Row>
        </Container>
    )
};

export default Dashboard;