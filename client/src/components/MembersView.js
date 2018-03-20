import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {
  Divider,
  Image,
  Card,
  Header,
  Segment,
  Button,
   } from 'semantic-ui-react';

class MembersView extends React.Component {
  
state = {users: []}


componentDidMount() {
  axios.get('/api/members')
    .then( res => this.setState({ users: res.data }) )
}


  
members = () =>
  {
    const {users } = this.state;
    return users.map( m =>
      
      <Card 
        key={ m.id }
        color= 'purple'
      >
        <Card.Content>
          <Card.Header>
            { m.name }
          </Card.Header>
          <Card.Content>
            <Image src = {m.avatar}/>
            <Divider/>
          </Card.Content>
          <Card.Description>
            { m.nickname } <br/>
            {m.email} <br/> 
            {m.location} <br/>
            {m.school} <br/>
            {m.occupation}
          </Card.Description>
        </Card.Content>
        <Button 
          a= {`/members/{m.id}`}
          color = 'blue' >
          View 
          </Button>
      <Link to={`/members/{m.id}`}>
          <Button >
          <p>Click Me!</p>
          </Button>
      </Link>
        <Button>Add</Button>
      </Card>
    )
  }
  //not sure how to get email in there ^^
  render() {
    return (
      <div className = 'main-page'>
      <Segment inverted>
        <Header 
          as='h3' 
          size='huge'
          textAlign='center'
          inverted color ='purple'>
          DPLspace Member List
          </Header>
          </Segment>
          <Link to='./my_friends'>My Friends</Link> <br/>
          <Link to='/'>Home</Link>
            <Card.Group itemsPerRow={ 3 }>
                    { this.members() }
                  </Card.Group>
            </div>
          )
        }
       
    
  }



const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    users: state.users
  }
}

export default connect(mapStateToProps)(MembersView);