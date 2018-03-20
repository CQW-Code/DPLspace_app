import React, { Component } from 'react';
import {Header,
        Segment,
        Card,
          } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//import {getMembers} from '../actions/members';
//import {getUsers} from '../actions/users';
//import axios from 'axios';
import '../App.css';

class Home extends Component {


  
  
    
    render() {

      return (
        <div className= 'main-page'>
      <Segment inverted>
        <Header 
          as='h1' 
          size='huge' 
          inverted color='purple' 
          textAlign='center'
            >
          Welcome to DPLspace
        </Header>
      </Segment>
        <Link to='./my_friends'>My Friends</Link> <br/> 
        <Link to='./members'>View All Members</Link>
    
        <Card  >
          Hello 
          
          </Card>
         
        </div>
      )
    }
  }

  
  
  
  
  export default connect()(Home);
