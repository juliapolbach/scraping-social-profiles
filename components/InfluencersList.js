import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';
import styled from 'styled-components';
import {allInfluencers} from '../queries/allInfluencersQuery';
import Influencer from './Influencer';

const Container = styled.div`
   height: 100%;
   width: 100%;
   overflow: hidden;
`;
const Title = styled.h3`
  margin: 50px 0 30px 50px;
  color: ${props => props.theme.green};
  font-weight: 700;
`;

const ListGroup = styled.ul`
  list-style-type: none;
  height: 75vh;
  overflow-y:scroll;
  margin: 0 auto;
  padding-top: 40px;
  border-right: 1px dashed ${props => props.theme.green};
`;

class InfluencersList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>;
        } else if (this.props.data.error) {
            return <div className="col-md-6">Error</div>;
        } else {
            return (
                <Container>
                    <Title>👨‍💻 Influencers</Title>
                    <ListGroup>
                        {this.props.data.allInfluencers.map((influencer, index) => {
                            return <li key={index}>
                                <Influencer influencer={influencer}/>
                            </li>
                        }).reverse()
                        }
                    </ListGroup>
                </Container>
            );
        }
    }
}

InfluencersList.propTypes = {
    data: PropTypes.object.isRequired
};

const InfluencersListWrapper = graphql(allInfluencers)(InfluencersList);
export default InfluencersListWrapper;