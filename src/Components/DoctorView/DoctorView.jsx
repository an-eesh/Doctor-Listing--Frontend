import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function DoctorView() {
    const {id} = useParams();
    const [doctors,setDoctors] = useState({})
    const fetchData = async() =>{
        const {data} = await axios.get(`http://localhost:3001/doctors/${id}`);
        setDoctors(data);
        // console.log(data);
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <Container>
      <Row>
        <Col sm={12} md={6} className='d-flex align-items-center'>
        <Card className='p-5' style={{ width: '90%' }}>
      <Card.Body>
        <Card.Title className='fs-3 text-primary'>{doctors.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{doctors.specialty}</Card.Subtitle>
        <Card.Text>
            {doctors.address}
        </Card.Text>
        <Card.Link href="#" style={{textDecoration:'none'}}>{doctors.phone}</Card.Link>
        <Card.Link href="#" style={{textDecoration:'none'}}>{doctors.email}</Card.Link>
      </Card.Body>
    </Card>
        </Col>

        <Col sm={12} md={6} className='py-5' style={{height:'75vh'}}>
        <ListGroup className='p-5'>
      <ListGroup.Item active variant='success'>{doctors.name}</ListGroup.Item>
      <ListGroup.Item><span className='text-info'>specialty :</span> {doctors.specialty}</ListGroup.Item>
      <ListGroup.Item><span className='text-info'>Address :</span>{doctors.address}</ListGroup.Item>
      <ListGroup.Item><span className='text-info'>Working Hours :</span> {doctors.available_hours}</ListGroup.Item>
      <ListGroup.Item><span className='text-info'>Rating :</span> {doctors.rating}</ListGroup.Item>
      <ListGroup.Item><Link>View Reviews</Link></ListGroup.Item>
    </ListGroup>
        </Col>

      </Row>
    </Container>
    </div>
  )
}

export default DoctorView