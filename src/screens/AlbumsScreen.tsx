
import React, { useEffect } from 'react';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
 
} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { AppState } from '../store/store';
import { Utilisateur } from '../store/interfaces/utilisateur';
import { Routes, Route, useParams } from "react-router-dom";
import { getAlbums } from '../store/effects/Albums';
import { Album } from '../store/interfaces/album';



function AlbumsScreen() {
    let params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(console.log())
    dispatch(getAlbums(params?.userId));
  }, [dispatch]);



  const albums = useSelector((state: AppState) => state.albums);


const albumsItems =    
   <Row>
    {albums.albums.map((album: Album) => (
      <Col md={4}>
         <div key={album.id}>
             <Card style={{ width: '18rem',flexDirection:'row',margin:"10px" }}>
       <Card.Body>
         <Card.Title>Titre d'album {album.id} : </Card.Title>
         <Card.Subtitle className="mb-2 text-muted"> {album.title}</Card.Subtitle>

      <Link to={`/images/${params.UserName}/${album.id}/${album.title}`}>Voir les images </Link>

       </Card.Body>
     </Card>   
         </div>
       
      </Col>
    ))}
  </Row>
 
  return (
    <React.Fragment >
      <Container>
      <h1>Voici les albums de :  {params.UserName}</h1>
     <div>{albumsItems}</div>
      </Container>
    </React.Fragment>
  );


}

export default AlbumsScreen;