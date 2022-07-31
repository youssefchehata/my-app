


import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Container,
 
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import {  useParams } from "react-router-dom";
import { getImages } from '../store/effects/Images';
import { Image } from '../store/interfaces/image';



function ImagesScreen() {
    let params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(console.log())
    dispatch(getImages(params?.AlbumId));
  }, [dispatch]);



  const images = useSelector((state: AppState) => state.images);


const imagesItems =    
   <Row>
    {images.images.map((image: Image) => (
      <Col xs="4">
         <div key={image.id}>
         <Card style={{ width: '18rem',margin:"10px" }}>
      <Card.Img variant="top" src={image.thumbnailUrl} />
      <Card.Body>
      <Card.Title>Titre d'image :</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{image.title}</Card.Subtitle>

      </Card.Body>
    </Card>
         </div>
      </Col>
    ))}
  </Row>

 const {AlbumTitle,UserName}=params
  return (
    <React.Fragment >
      <Container>
      <h2>Voici les images de l’album {AlbumTitle} de l’utilisateur {UserName} </h2>
     <div>{imagesItems}</div>
      </Container>
    </React.Fragment>
  );


}

export default ImagesScreen;