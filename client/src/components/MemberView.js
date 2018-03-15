import React from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  Header,
  Image,
  Container,
  Table,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MemberView extends React.Component {
  state = { }



  render() {
    const { member = {}} = this.props;
    return (
      <Container>
        <Link to="/members">View All Members</Link>
        
            <div>
              <Header as="h3" textAlign="center">{member.name}</Header>
              <Image src={member.avatar} />
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>
    
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Nickname</Table.Cell>
                    <Table.Cell>{member.nickname}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Location</Table.Cell>
                    <Table.Cell>{member.location}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>School</Table.Cell>
                    <Table.Cell>{member.school}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Occupation</Table.Cell>
                    <Table.Cell>${member.occupation}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
        }
        
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { member: state.members.find( m => m.id === parseInt(props.match.params.id ))}
}

export default connect(mapStateToProps)(MemberView);
