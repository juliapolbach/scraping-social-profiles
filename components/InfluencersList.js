import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';
import styled from 'styled-components';
import {allInfluencers} from '../queries/allInfluencersQuery';
import Influencer from './Influencer';

const ListGroup = styled.ul`
  list-style-type: none;
`;

const ListGroupItem = styled.li`
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
            console.log(this.props.data.allInfluencers);
            return (
                <div>
                    <ListGroup>
                        <li><h4>Influencers</h4></li>
                        {this.props.data.allInfluencers.map((influencer, index) => {
                            return <ListGroupItem key={index}>
                                <Influencer influencer={influencer}/>
                            </ListGroupItem>
                        })
                        }
                    </ListGroup>
                </div>
            );
        }
    }
}

InfluencersList.propTypes = {
    data: PropTypes.object.isRequired
};

const InfluencersListWrapper = graphql(allInfluencers)(InfluencersList);
export default InfluencersListWrapper;