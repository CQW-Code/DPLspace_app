import React, { Component } from 'react';
import { Header, Card, Image } from 'semantic-ui-react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setHeaders} from '../actions/headers';
import {Link} from 'react-router-dom';

class Home extends Component {
  state = {friends: []}
  componentDidMount() {
    const {dispatch} = this.props;
    axios.get('/api/friends')
      .then(res => {
        dispatch(setHeaders(res.headers))
        this.setState({friends: res.data})
      })
  }
  render() {
    return (
      <div>
      <Header as='h2' textAlign='center'>DPLspace</Header>
      <Link to='./my_friends'>My Friends</Link>
      <Card className="cards-root">
          { this.state.friends.map( friend =>
            <Card 
              key={friend.id}
            >  
                <h2>{friend.name}</h2>
                <Image src={friend.avatar} />
                <h3>{friend.location}</h3>
              </Card>
            )
          }
        </Card>
      </div>
    );
  }
}

export default connect()(Home);
