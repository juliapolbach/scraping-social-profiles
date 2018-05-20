import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';
import {ContainerList, ListGroup, Title} from "../styles/styledComponents";
import {allInfluencers} from '../queries/allInfluencersQuery';
import Influencer from './Influencer';

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
                <ContainerList>
                    <Title>👨‍💻 Influencers</Title>
                    <ListGroup>
                        {this.props.data.allInfluencers.map((influencer, index) => {
                            return <li key={index}>
                                <Influencer influencer={influencer}/>
                            </li>
                        }).reverse()
                        }
                    </ListGroup>
                </ContainerList>
            );
        }
    }
}

InfluencersList.propTypes = {
    data: PropTypes.object.isRequired
};

const InfluencersListWrapper = graphql(allInfluencers)(InfluencersList);
export default InfluencersListWrapper;