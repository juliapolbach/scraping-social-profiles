import React from 'react';
import styled from 'styled-components';

const InfluencerBox = styled.div`
  width: 100%;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  background-color: ${props => props.theme.white};
  font-weight: 400;
`;

const Name = styled.h4`
  color: ${props => props.theme.pale};
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
  padding: 20px;
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
                <Img src={this.getAvatar(this.props.influencer.instagram.photoProfile)} alt="Profile photo"/>
                <Name>{this.props.influencer.name} {this.props.influencer.lastName}</Name>
                <Actions>
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"> </span>
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"> </span>
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
            </InfluencerBox>
        );
    }
}

Influencer.propTypes = {};

export default Influencer;
