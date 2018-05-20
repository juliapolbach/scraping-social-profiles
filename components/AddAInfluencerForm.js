import React from 'react';
import {graphql} from 'react-apollo';
import styled from 'styled-components';
import {createInfluencer} from '../queries/createInfluencerQuery';
import {allInfluencers} from '../queries/allInfluencersQuery';

const Title = styled.h3`
  margin: 50px 0 0 50px;
  color: ${props => props.theme.green};
  font-weight: 700;
`;
const StyledInput = styled.input`
  width: 400px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.green};
  margin: 10px 50px 0 0;
  padding: 10px 10px 10px 10px;
  border-radius: 4px;
  height: 30px;
`;

const StyledButton = styled.button`
  width: 400px;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.green};
  background-color: ${props => props.theme.white};
  border-radius: 30px;
  margin-top: 30px;
  padding: 5px 30px 5px 30px;
  display: block;
  color: ${props => props.theme.green};
  &:hover {
  background-color: ${props => props.theme.paleGreen};
  color: ${props => props.theme.white};
  }
`;

const StyledForm = styled.form`
   width: 60%;
   margin: 50px auto;
   padding: 10px 10px 10px 10px;
`;

const Container = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
`;


class AddAInfluencerForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {name: '', lastName: '', instagram: '', twitter: '', youtube: ''};
    }

    onClick() {
        this.props.mutate({
            variables: {
                input: {
                    name: this.state.name,
                    lastName: this.state.lastName,
                    instagram: {profileUrl: this.state.instagram},
                    twitter: {profileUrl: this.state.twitter},
                    youtube: {profileUrl: this.state.youtube}
                }
            },
            refetchQueries: [{query: allInfluencers}]
        })
            .then(() => {
                console.log('hurray!');
            }).catch((error) => {
            console.log('error :(', error);
        });
    }

    handleChange(value, id) {
        this.setState({[id]: value});
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Title>🙋 Add an Influencer</Title>
                <StyledForm>
                    <StyledInput
                        name="name"
                        type="text"
                        value={this.state.name}
                        placeholder="Name*"
                        onChange={event => this.handleChange(event.target.value, event.target.name)}
                    />
                    <StyledInput
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        placeholder="Last Name*"
                        onChange={event => this.handleChange(event.target.value, event.target.name)}
                    />
                    <StyledInput
                        name="instagram"
                        type="text"
                        value={this.state.instagram}
                        placeholder="Instagram"
                        onChange={event => this.handleChange(event.target.value, event.target.name)}
                    />
                    <StyledInput
                        name="twitter"
                        type="text"
                        value={this.state.twitter}
                        placeholder="Twitter"
                        onChange={event => this.handleChange(event.target.value, event.target.name)}
                    />
                    <StyledInput
                        name="youtube"
                        type="text"
                        value={this.state.youtube}
                        placeholder="Youtube"
                        onChange={event => this.handleChange(event.target.value, event.target.name)}
                    />
                    <StyledButton type="button" onClick={this.onClick}>ADD</StyledButton>
                </StyledForm>
            </Container>
        );
    }
}

AddAInfluencerForm.propTypes = {};

const AddAInfluencerFormWrapper = graphql(createInfluencer)(AddAInfluencerForm);
export default AddAInfluencerFormWrapper;
