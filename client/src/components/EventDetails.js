import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Card, CardText, Button, CardHeader } from 'reactstrap';
import moment from 'moment';

const EventDetails = (props) => {
    const {id} = useParams();
    const [singleEvent, setSingleEvent] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/events/" + id)
            .then((res) => {
                console.log(res.data);
                setSingleEvent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    

    return (
        <div>
            <Card body color='dark' outline className="my-2 mx-auto mt-5" style={{width: '35rem', height: "40rem", boxShadow: "7px 7px 7px grey"}}>
                <CardHeader className='mb-5' tag="h1">{singleEvent.name}</CardHeader>
                <CardText className='mb-5' tag="h3">Game: {singleEvent.game}</CardText>
                <CardText className='mb-5' tag="h3">Date: {moment(singleEvent.startDate).format("MMM-Do-YYYY")} - {moment(singleEvent.endDate).format("MMM-Do-YYYY")}</CardText>
                <CardText className='mb-5' tag="h4">Details: {singleEvent.description}</CardText>
                <Button style={{width: "10rem", color: "white"}} color="info">Go somewhere</Button>
            </Card>
        </div>
    );
};

export default EventDetails;