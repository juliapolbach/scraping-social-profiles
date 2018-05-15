import React from 'react';
import {graphql} from 'react-apollo';
import styled from 'styled-components';
import {createInfluencer} from '../queries/createInfluencerQuery';
import {allInfluencers} from '../queries/allInfluencersQuery';

const StyledInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.paleblue};
  border: 2px solid ${props => props.validate ? props.theme.blue : props.theme.pale};
  padding-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 30px;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.paleblue};
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
            variables: {input: {
                name: this.state.name,
                lastName: this.state.lastName,
                instagram: {profileUrl: this.state.instagram},
                twitter: {profileUrl: this.state.twitter},
                youtube: {profileUrl: this.state.youtube}
            }},
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
            <form>
                <StyledLabel>Name</StyledLabel>
                <StyledInput
                    name="name"
                    type="text"
                    value={this.state.name}
                    placeholder="Name"
                    onChange={event => this.handleChange(event.target.value, event.target.name)}
                />
                <StyledLabel>Last Name</StyledLabel>
                <StyledInput
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={event => this.handleChange(event.target.value, event.target.name)}
                />
                <StyledLabel>Instagram</StyledLabel>
                <StyledInput
                    name="instagram"
                    type="text"
                    value={this.state.instagram}
                    placeholder="https://"
                    onChange={event => this.handleChange(event.target.value, event.target.name)}
                />
                <StyledLabel>Twitter</StyledLabel>
                <StyledInput
                    name="twitter"
                    type="text"
                    value={this.state.twitter}
                    placeholder="https://"
                    onChange={event => this.handleChange(event.target.value, event.target.name)}
                />
                <StyledLabel>Youtube</StyledLabel>
                <StyledInput
                    name="youtube"
                    type="text"
                    value={this.state.youtube}
                    placeholder="https://"
                    onChange={event => this.handleChange(event.target.value, event.target.name)}
                />
                <StyledButton type="button" onClick={this.onClick}>Send!</StyledButton>
            </form>
        );
    }
}

AddAInfluencerForm.propTypes = {

};

const AddAInfluencerFormWrapper = graphql(createInfluencer)(AddAInfluencerForm);
export default AddAInfluencerFormWrapper;
