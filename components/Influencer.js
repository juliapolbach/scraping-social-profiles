import React from 'react';
import styled from 'styled-components';
import {graphql} from 'react-apollo';
import {Row, Col} from 'react-bootstrap';
import {beautifyNumber} from "../styles/beautifier";
import {removeInfluencer} from '../queries/removeInfluencerQuery';
import {allInfluencers} from '../queries/allInfluencersQuery';

const InfluencerBox = styled.div`
  width: 90%;
  margin: 10px 1px 1px 10px;
  padding: 10px 1px 10px 10px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.green};
  border-radius: 4px;
`;

const Name = styled.h4`
  color: ${props => props.theme.green};
  float: left;
  font-weight: 700;
`;

const Img = styled.img`
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;

`;
const Field = styled.div`
    clear:both;
`;

const Label = styled.div`
    display: inline-block;
    padding: 1px 0 0 10px;
    font-weight: 900;
    color: ${props => props.theme.green};
`;

const Result = styled.div`
    display: inline-block;
    padding: 1px 10px 0 10px;
    font-weight: 900;
    color: ${props => props.theme.grey};
`;

const StyledLink = styled.button`
  background: transparent;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.green};
  border: 1px solid ${props => props.theme.green};
  border-radius: 30px;
  padding: 2px 10px 2px 10px;
  margin: 2px 0 2px 0;
  &:hover {
  background-color: ${props => props.theme.paleGreen};
  color: ${props => props.theme.white};
  }
  &:focus{
    outline: none;
 }
`;

const Actions = styled.div`
  float: right;
  padding: 0 10px 0px 10px;
`;

const Icon = styled.button`
  background: transparent;
  border: 0;  
  color: ${props => props.theme.green};
  padding: 10px;
  &:focus{
  outline: none;
}
`;

class Influencer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {isEditing: false};
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.mutate({
            variables: {id: this.props.influencer.id},
            refetchQueries: [{query: allInfluencers}]
        })
            .then(() => {
                console.log('removed!');
            }).catch((error) => {
            console.log('error :(', error);
        });
    }

    getAvatar(img) {
        return img ? img : 'https://pbs.twimg.com/profile_images/882655374075154432/-v9Niv2h_400x400.jpg';
    }

    render() {
        return (
            <div>
                {(!this.state.isEditing &&
                    <InfluencerBox>
                        <Row>
                            <Col md={2}>
                                <Img src={this.getAvatar(this.props.influencer.instagram.photoProfile)}
                                     alt="Profile photo"/>
                            </Col>
                            <Col md={10}>
                                <Name>{this.props.influencer.name} {this.props.influencer.lastName}</Name>
                                <Actions>
                                    <Icon>EDIT</Icon>
                                    <Icon className="glyphicon glyphicon-remove" aria-hidden="true"
                                          onClick={this.remove}> </Icon>
                                </Actions>
                                {(this.props.influencer.instagram &&
                                    <Field>
                                        <Row>
                                            <Col md={2}>
                                                <StyledLink
                                                    href={this.props.influencer.instagram ? this.props.influencer.instagram.profileUrl : undefined}>Instagram</StyledLink></Col>
                                            <Col md={10}>
                                                <Label>Followers:</Label><Result>{beautifyNumber(this.props.influencer.instagram.followers)}</Result>
                                                <Label>Total
                                                    Posts:</Label><Result>{beautifyNumber(this.props.influencer.instagram.totalPosts)}</Result>
                                            </Col>
                                        </Row>
                                    </Field>)}
                                {(this.props.influencer.twitter &&
                                    <Field>
                                        <Row>
                                            <Col md={2}>
                                                <StyledLink
                                                    href={this.props.influencer.twitter ? this.props.influencer.twitter.profileUrl : undefined}>Twitter</StyledLink></Col>
                                            <Col md={10}>
                                                <Label>Followers:</Label><Result>{beautifyNumber(this.props.influencer.twitter.followers)}</Result>
                                                <Label>Total
                                                    Posts:</Label><Result>{beautifyNumber(this.props.influencer.twitter.totalPosts)}</Result>
                                            </Col>
                                        </Row>
                                    </Field>)}
                                {(this.props.influencer.youtube &&
                                    <Field>
                                        <Row>
                                            <Col md={2}>
                                                <StyledLink
                                                    href={this.props.influencer.youtube ? this.props.influencer.youtube.profileUrl : undefined}>Youtube</StyledLink></Col>
                                            <Col md={10}>
                                                <Label>Followers:</Label><Result>{beautifyNumber(this.props.influencer.youtube.followers)}</Result>
                                                <Label>Total
                                                    Posts:</Label><Result>{beautifyNumber(this.props.influencer.youtube.totalPosts)}</Result>
                                            </Col>
                                        </Row>
                                    </Field>)}
                            </Col>
                        </Row>
                    </InfluencerBox>
                )}
                {(this.state.isEditing &&
                    <EditingInfluencerBox>

                    </EditingInfluencerBox>
                )}
            </div>
        );
    }
}

Influencer.propTypes = {};

const InfluencerWrapper = graphql(removeInfluencer)(Influencer);
export default InfluencerWrapper;
