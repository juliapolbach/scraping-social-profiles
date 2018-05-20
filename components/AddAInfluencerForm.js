import React from 'react';
import {graphql} from 'react-apollo';
import {createInfluencer} from '../queries/createInfluencerQuery';
import {allInfluencers} from '../queries/allInfluencersQuery';
import {beautifyURL} from "../styles/beautifier";
import {StyledForm, StyledInput, Container, Title, StyledButton} from "../styles/styledComponents";
import { notify } from 'react-notify-toast';

class AddAInfluencerForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {name: '', lastName: '', instagram: '', twitter: '', youtube: ''};
    }

    onClick() {
        if (this.state.name !== '') {
            let myColor = { background: '#8eb7ce', text: "#000000" };
            notify.show('Scrapping, please wait... 💅', "custom", 5000, myColor);
            this.props.mutate({
                variables: {
                    input: {
                        name: this.state.name,
                        lastName: this.state.lastName,
                        instagram: {profileUrl: beautifyURL(this.state.instagram)},
                        twitter: {profileUrl: beautifyURL(this.state.twitter)},
                        youtube: {profileUrl: beautifyURL(this.state.youtube)}
                    }
                },
                refetchQueries: [{query: allInfluencers}]
            })
                .then(() => {
                    console.log('hurray!');
                    this.setState({name: '', lastName: '', instagram: '', twitter: '', youtube: ''})
                }).catch((error) => {
                notify.hide();
                notify.show('There was an error 😱‍' + error.message, "error");
            });
        } else {
            notify.show('Please, specify at least an influencer\'s name 🙅‍', "warning");
        }
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
                        placeholder="Last Name"
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
