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
  padding: 10px 30px 10px 30px;
  background-color: ${props => props.theme.white};
  font-family: Raleway, sans-serif;
  color: ${props => props.theme.grey};
  
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
