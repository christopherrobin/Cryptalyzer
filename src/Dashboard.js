import React from "react";
import { Container, Row, Col } from "reactstrap";
import './Dashboard.scss';

// Material-UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
    return(
        <Container id="Dashboard-Container">
            <Row>
                <Col xs={12}>
                    <h1>Cryptalyzer</h1>
                    <h2>Dashboard</h2>
                    <hr />
                    <Row>
                        <Col xs={12} md={9}>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://www.placecage.com/c/200/300"
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Christopher Reynolds
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Information here
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                    <Button size="small" color="primary">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col xs={12} md={3}>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Christopher Reynolds
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Information here
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Dashboard;