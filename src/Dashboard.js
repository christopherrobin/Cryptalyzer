import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {Helmet} from 'react-helmet';
import { Container, Row, Col } from "reactstrap";
import { getBasicUser, getUserAccounts } from './FetchWork';
import Header from './components/PageHeader';
import StripedTable from './components/StripedTable';
import format from 'date-fns/format';
import './Dashboard.scss';

// Material-UI
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
    const [basicUserResponse, setBasicUserResponse] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBasicUser()
            .then(function(result) {
                setBasicUserResponse(result);
                setLoading(false);
            })
        
        getUserAccounts()
            .then(function(result) {
                console.log(result);
                setLoading(false);
            })
    }, [])

    const data = get(basicUserResponse, 'data', false);
    const basicUserResponseError = get(basicUserResponse, 'errors', false);
    const time = get(data, 'created_at', false);
    //console.log(data);

    return(
        <Container id="Dashboard-Container">
            <Helmet>
                <title>Cryptalyzer - Dashboard</title>
                <link rel="canonical" href="https://Cryptalyzer.com/dashboard" />
                <meta name="description" content="Cryptalyzer User Dashboard" />
            </Helmet>
            <Header pageTitle="Dashboard"/>
            <Row>
                <Col xs={12}>
                    {
                        data && !basicUserResponseError && !loading ?
                            <div>
                                <Row>
                                    <Col xs={12} md={8}>
                                        <Card style={{ marginBottom: '2em' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                component="img"
                                                alt="User Profile Picture"
                                                height="140"
                                                image={data.avatar_url}
                                                title="User Profile Picture"
                                                style={{ height: '15em' }}
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {data.name}
                                                </Typography>
                                                <div>
                                                    <p>User Since {format(new Date(time), 'eeee, MMMM do yyyy, h:mm:ss aa')}</p>
                                                </div>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Card style={{ marginBottom: '2em' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Welcome back!
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    <Link to="/sync">Sync With Coinbase</Link>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <div style={{ marginBottom: '3em' }}>
                                            <h3 style={{ marginBottom: '0.5em' }}>User Details</h3>
                                            <StripedTable
                                                dataToMap={[
                                                    { key: "Avatar URL", value: data.avatar_url },
                                                    { key: "User ID", value: data.id },
                                                    { key: "Legacy ID", value: get(data, 'legacy_id', false) },
                                                    { key: "User Since", value: format(new Date(time), 'eeee, MMMM do yyyy, h:mm:ss aa')},
                                                    { key: "Country", value: get(data, 'country.name', false) },
                                                    { key: "State", value: data.state },
                                                    { key: "Currency", value: data.native_currency },
                                                    { key: "Time Zone", value: data.time_zone },
                                                    { key: "User Type", value: data.user_type },
                                                    { key: "Tier", value: get(data, 'tiers.completed_description', false) },
                                                ]}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            : null
                    }
                    {
                        basicUserResponseError && !loading ?
                            <div>
                                <Alert style={{ marginBottom: '1em' }} severity="error">
                                    <p>There was an error retrieving your Coinbase user Information.</p>
                                    <p>{get(basicUserResponseError[0], 'id', 'generic id')}: {get(basicUserResponseError[0], 'message', 'generic error')}</p>
                                </Alert>
                                <Button disableElevation variant="contained" color="primary" style={{ margin: '1em 0' }}>
                                    <Link to="/sync">Sync With Coinbase Again</Link>
                                </Button>
                            </div> : null
                    }
                </Col>
            </Row>
        </Container>
    )
};

export default Dashboard;