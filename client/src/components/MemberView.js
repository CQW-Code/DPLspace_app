import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {setHeaders} from '../actions/headers';
import {Link} from 'react-router-dom';
import {
  Divider,
  Image,
  Card,
  Header,
} from 'semantic-ui-react';

class MemberView extends React.Component {
  
  state = {members: [] } 
  componentDidMount() {
    const {dispatch} = this.props;
    axios.get('/api/members')
      .then(res => {
        dispatch(setHeaders(res.headers))
        this.setState({members: res.data})
      })
  }
render() {

    const { members} = this.state;
    return (
      <div>
      <Header 
        as='h1' 
        size='huge' 
        color='violet' 
        textAlign='center'
        block>
        DPLspace Members
      </Header>
      <Link to='./my_friends'>My Friends</Link> <br/>
      <Link to='/'>Home</Link>
        <Card.Group  itemsPerRow={3}>
        { members.map( member =>
            <Card color='purple' key={member.id}>
              <Card.Content>
                <Image src={member.avatar} />
                <Divider />
                <Card.Header>
                   {member.name}
                   </Card.Header>
                  <hr />
                   {member.nickname}
                  <br/>
                  <Card.Content>
                    From: {member.location}
                    </Card.Content>
                     
                <Card.Content>
                  School: {member.school} <br/>
                  </Card.Content>
                  <Card.Content>
                  Occupation: {member.occupation}
                </Card.Content>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
      </div>
    )
  }
}



export default connect()(MemberView);
