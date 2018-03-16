import React, { Component } from 'react';
import { Header, Card, Image } from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setHeaders} from '../actions/headers';
import {Link} from 'react-router-dom';
import '../cards.css';

class Home extends Component {
  state = {members: []}
  componentDidMount() {
    const {dispatch} = this.props;
    axios.get('/api/members')
      .then(res => {
        dispatch(setHeaders(res.headers))
        this.setState({members: res.data})
      })
  }
  render() {
    return (
      <div>
      <Header 
        as='h1' 
        size='huge' 
        color='violet' 
        textAlign='center'
        block>
        DPLspace
      </Header>
      <Link to='./my_friends'>My Friends</Link> <br/>
      <Link to='./members'>View Members</Link>
       
      </div>
    )
  }
}

export default connect()(Home);
