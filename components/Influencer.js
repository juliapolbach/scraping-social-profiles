import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const InfluencerBox = styled.div`
  width: 90%;
  margin: 10px 1px 1px 10px;
  padding: 10px 1px 1px 10px;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;

`;
const Field = styled.div`
    clear:both;
`;

const Label = styled.div`
  float: left;
`;

const Actions = styled.div`
  float: right;
  padding: 0 10px 10px 10px;
`;

const Icon = styled.span`
  color: ${props => props.theme.green};
  padding: 10px;
`;

class Influencer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    getAvatar(img) {
        return img ? img : 'https://pbs.twimg.com/profile_images/882655374075154432/-v9Niv2h_400x400.jpg';
    }

    render() {
        return (
            <InfluencerBox>
                <Row>
                    <Col md={2}>
                <Img src={this.getAvatar(this.props.influencer.instagram.photoProfile)} alt="Profile photo"/>
                    </Col>
                    <Col md={10}>
                    <Name>{this.props.influencer.name} {this.props.influencer.lastName}</Name>
                <Actions>
                    <Icon>EDIT</Icon>
                    <Icon className="glyphicon glyphicon-remove" aria-hidden="true"> </Icon>
                </Actions>
                <Field>
                    <a href={this.props.influencer.instagram ? this.props.influencer.instagram.profileUrl : undefined}>Instagram</a>
                    <Label>Followers: {this.props.influencer.instagram.followers}</Label>
                    <Label>Total Posts: {this.props.influencer.instagram.totalPosts}</Label>
                </Field>
                <Field>
                    <a href={this.props.influencer.twitter ? this.props.influencer.twitter.profileUrl : undefined}>Twitter</a>
                    <Label>Followers: {this.props.influencer.twitter ? this.props.influencer.twitter.followers : '--'}</Label>
                    <Label>Total
                        Posts: {this.props.influencer.twitter ? this.props.influencer.twitter.totalPosts : '--'}</Label>
                </Field>
                <Field>
                    <a href={this.props.influencer.youtube ? this.props.influencer.youtube.profileUrl : undefined}>Youtube</a>
                    <Label>Followers: {this.props.influencer.youtube ? this.props.influencer.youtube.followers : '--'}</Label>
                    <Label>Total
                        Posts: {this.props.influencer.youtube ? this.props.influencer.youtube.totalPosts : '--'}</Label>
                </Field>
                    </Col>
                </Row>
            </InfluencerBox>
        );
    }
}

Influencer.propTypes = {};

export default Influencer;
