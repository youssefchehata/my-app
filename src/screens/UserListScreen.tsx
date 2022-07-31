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
// import logo from './logo.svg';
// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getUtilisateurs } from '../store/effects/Utilisateurs';
import { AppState } from '../store/store';
import { Utilisateur } from '../store/interfaces/utilisateur';
// import notFound from '../components/notFound.jpg'




function UserListScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(console.log())
    dispatch(getUtilisateurs());
  }, [dispatch]);



  const utilisateurs = useSelector((state: AppState) => state.utilisateurs);


const utilisateurItems =    
   <Row>
    {utilisateurs.utilisateurs.map((utilisateur: Utilisateur) => (
      <Col xs="4">
         <div key={utilisateur.id}>
             <Card style={{ width: '18rem',flexDirection:'row',margin:"10px" }}>
       <Card.Body>
         <Card.Title>{utilisateur.name}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">{utilisateur.username}</Card.Subtitle>
         <Card.Text>
           Some 
         </Card.Text>
      <Link to={`/albums/${utilisateur.id}/${utilisateur.name}`}>Voir albums :{utilisateur.name}</Link>

       </Card.Body>
     </Card>   
         </div>
       
      </Col>
    ))}
  </Row>
 
  return (
    <React.Fragment >
      <Container>
      <h2 className="mx-auto " style={{width: "500px"}}>la liste des utilisateurs:</h2>
     
     <div>{utilisateurItems}</div>
     


     {/* ==================================== */}
   {/* <h1>{state}</h1>
   <button onClick={() =>{depositMoney(1000)}}>Deposit</button>
   <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
   <button onClick={() => bankrupt()}>Bankrupt</button> */}
       {/* <div>
 
   <nav>
     <Link to="/">Home</Link> |{" "}
     <Link to="albums">albums</Link> |{" "}
     <Link to="albumDetails/3">albumDetails</Link>
   </nav>
 </div> */}
      </Container>
 
    </React.Fragment>
  );


}

export default UserListScreen;