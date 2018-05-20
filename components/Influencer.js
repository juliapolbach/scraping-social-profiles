import React from 'react';
import {graphql, compose} from 'react-apollo';
import {Row, Col} from 'react-bootstrap';
import {beautifyNumber, beautifyURL} from "../styles/beautifier";
import {removeInfluencer} from '../queries/removeInfluencerQuery';
import {allInfluencers} from '../queries/allInfluencersQuery';
import {updateInfluencer} from '../queries/updateInfluencerQuery';
import { notify } from 'react-notify-toast';

import {
    InfluencerBox,
    EditingInfluencerBox,
    Name,
    Img,
    Actions,
    Label,
    Field,
    Result,
    StyledLink,
    Icon,
    StyledEditingButton,
    StyledInput
} from "../styles/styledComponents";

class Influencer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isEditing: false,
            instagram: this.props.influencer.instagram.profileUrl,
            twitter: this.props.influencer.twitter.profileUrl,
            youtube: this.props.influencer.youtube.profileUrl
        };
        this.handleChange = this.handleChange.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let myColor = { background: '#8eb7ce', text: "#000000" };
        notify.show('Updating, please wait... 💅', "custom", 5000, myColor);
        this.props.updateInfluencer({
            variables: {
                input: {
                    id: this.props.influencer.id,
                    name: this.props.influencer.name,
                    lastName: this.props.influencer.lastName,
                    instagram: {profileUrl: beautifyURL(this.state.instagram)},
                    twitter: {profileUrl: beautifyURL(this.state.twitter)},
                    youtube: {profileUrl: beautifyURL(this.state.youtube)}
                }
            },
            refetchQueries: [{query: allInfluencers}]
        })
            .then(() => {
                this.setState({isEditing: !this.state.isEditing});
                console.log('hurray!');
            }).catch((error) => {
            console.log('error :(', error);
        });
    }

    remove() {
        this.props.removeInfluencer({
            variables: {id: this.props.influencer.id},
            refetchQueries: [{query: allInfluencers}]
        })
            .then(() => {
                console.log('removed!');
            }).catch((error) => {
            console.log('error :(', error);
        });
    }

    edit() {
        this.setState({isEditing: !this.state.isEditing});
    }


    handleChange(value, id) {
        this.setState({[id]: value});
        event.preventDefault();
    }

    getAvatar(influencer) {
        if (influencer.instagram.photoProfile) {
            return influencer.instagram.photoProfile;
        } else if (influencer.twitter.photoProfile) {
            return influencer.twitter.photoProfile;
        } else if (influencer.youtube.photoProfile) {
            return influencer.youtube.photoProfile;
        } else {
            return 'https://pbs.twimg.com/profile_images/882655374075154432/-v9Niv2h_400x400.jpg';
        }
    }

    render() {
        return (
            <div>
                {(!this.state.isEditing &&
                    <InfluencerBox>
                        <Row>
                            <Col md={2}>
                                <Img src={this.getAvatar(this.props.influencer)}
                                     alt="Profile photo"/>
                            </Col>
                            <Col md={10}>
                                <Name>{this.props.influencer.name} {this.props.influencer.lastName}</Name>
                                <Actions>
                                    <Icon onClick={this.edit}>EDIT</Icon>
                                    <Icon className="glyphicon glyphicon-remove" aria-hidden="true"
                                          onClick={this.remove}> </Icon>
                                </Actions>
                                {(this.props.influencer.instagram.profileUrl &&
                                    <Field>
                                        <Row>
                                            <Col md={2}>
                                                <a href={this.props.influencer.instagram ? this.props.influencer.instagram.profileUrl : undefined}><StyledLink>Instagram</StyledLink></a></Col>
                                            <Col md={10}>
                                                <Label>Followers:</Label><Result>{beautifyNumber(this.props.influencer.instagram.followers)}</Result>
                                                <Label>Total
                                                    Posts:</Label><Result>{beautifyNumber(this.props.influencer.instagram.totalPosts)}</Result>
                                            </Col>
                                        </Row>
                                    </Field>)}
                                {(this.props.influencer.twitter.profileUrl &&
                                    <Field>
                                        <Row>
                                            <Col md={2}>
                                                <a href={this.props.influencer.twitter ? this.props.influencer.twitter.profileUrl : undefined}><StyledLink>Twitter</StyledLink></a></Col>
                                            <Col md={10}>
                                                <Label>Followers:</Label><Result>{beautifyNumber(this.props.influencer.twitter.followers)}</Result>
                                                <Label>Total
                                                    Posts:</Label><Result>{beautifyNumber(this.props.influencer.twitter.totalPosts)}</Result>
                                            </Col>
                                        </Row>
                                    </Field>)}
                                {(this.props.influencer.youtube.profileUrl &&
                                    <Field>
                                        <Row>
                                            <Col md={2}>
                                                <a href={this.props.influencer.youtube ? this.props.influencer.youtube.profileUrl : undefined}><StyledLink>Youtube</StyledLink></a></Col>
                                            <Col md={10}>
                                                <Label>Followers:</Label><Result>{beautifyNumber(this.props.influencer.youtube.followers)}</Result>
{/*
                                                <Label>Total Posts:</Label><Result>{beautifyNumber(this.props.influencer.youtube.totalPosts)}</Result>
*/}
                                            </Col>
                                        </Row>
                                    </Field>)}
                            </Col>
                        </Row>
                    </InfluencerBox>
                )}
                {(this.state.isEditing &&
                    <EditingInfluencerBox>
                        <Row>
                            <Col md={2}>
                                <Img src={this.getAvatar(this.props.influencer)}
                                     alt="Profile photo"/>
                            </Col>
                            <Col md={10}>
                                <Name>{this.props.influencer.name} {this.props.influencer.lastName}</Name>
                                <Actions>
                                    <Icon onClick={this.edit}>DISCARD</Icon>
                                </Actions>
                                <form>
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
                                    <StyledEditingButton type="button"
                                                         onClick={this.onClick}>UPDATE</StyledEditingButton>
                                </form>
                            </Col>
                        </Row>
                    </EditingInfluencerBox>
                )}
            </div>
        );
    }
}

Influencer.propTypes = {};

const InfluencerWrapper = compose(graphql(removeInfluencer, {name: 'removeInfluencer'}), graphql(updateInfluencer, {name: 'updateInfluencer'}))(Influencer);
export default InfluencerWrapper;
