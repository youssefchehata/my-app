import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  Container,
} from 'react-bootstrap';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getUtilisateurs } from '../store/effects/Utilisateurs';
import { AppState } from '../store/store';
import { Utilisateur } from '../store/interfaces/utilisateur';
import { Loader } from '../components/Loader';




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
        { utilisateurs.utilisateurs.length===0?
        <Loader/>:
         <>
         <h2 className="mx-auto  Header " >la liste des utilisateurs:</h2>
     <div>{utilisateurItems}</div>
        </> 
        }
      </Container>
 
    </React.Fragment>
  );


}

export default UserListScreen;