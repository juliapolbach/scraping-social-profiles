import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

import App from '../components/app';
import InfluencersList from '../components/InfluencersList';
import AddAInfluencerForm from '../components/AddAInfluencerForm.js';
import withData from '../lib/withData';

const StyledGrid = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
  font-family: ${props => props.theme.font};
`;

export default withData(() => (
    <App>
        <StyledGrid>
            <Row>
                <Col xs={12} md={6}>
                    <InfluencersList/>
                </Col>
                <Col xs={12} md={6}>
                    <AddAInfluencerForm/>
                </Col>
            </Row>
        </StyledGrid>
    </App>
));
