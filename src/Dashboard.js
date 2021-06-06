import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Container, Row, Col } from "reactstrap";
import { getBasicUser } from './FetchWork';
import Header from './components/PageHeader';
import StripedTable from './components/StripedTable';
import format from 'date-fns/format';
import './Dashboard.scss';

// Material-UI
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
    const [basicUserResponse, setBasicUserResponse] = useState({});

    useEffect(() => {
        getBasicUser()
            .then(function(result) {
                setBasicUserResponse(result);
            })
    }, [])

    const data = get(basicUserResponse, 'data', false);
    const basicUserResponseError = get(basicUserResponse, 'errors', false);
    const time = get(data, 'created_at', false);

    return(
        <Container id="Dashboard-Container">
            <Header pageTitle="Dashboard"/>
            <Row>
                <Col xs={12}>
                    {
                        data && !basicUserResponseError ?
                            <Row>
                                <Col xs={12} md={9}>
                                    <Card>
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
                                        <CardActions>
                                            <Button size="small" color="primary">
                                            Share
                                            </Button>
                                            <Button size="small" color="primary">
                                            Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>

                                    <div style={{ marginTop: '1em' }}>
                                    <StripedTable
                                        dataToMap={[
                                            { key: "Avatar URL", value: data.avatar_url },
                                            { key: "User ID", value: data.id },
                                            { key: "User Since", value: format(new Date(time), 'eeee, MMMM do yyyy, h:mm:ss aa')},
                                            { key: "Country", value: get(data, 'country.name', false) },
                                        ]}
                                    />
                                    </div>
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
                            :
                            <div>
                                <Alert style={{ marginBottom: '1em' }} severity="error">
                                    <p>There was an error retrieving your Coinbase user Information.</p>
                                    <p>{get(basicUserResponseError[0], 'id', 'generic id')}: {get(basicUserResponseError[0], 'message', 'generic error')}</p>
                                </Alert>
                                <Button disableElevation variant="contained" color="primary" style={{ margin: '1em 0' }}>
                                    <Link to="/sync">Sync With Coinbase Again</Link>
                                </Button>
                            </div>
                    }
                </Col>
            </Row>
        </Container>
    )
};

export default Dashboard;