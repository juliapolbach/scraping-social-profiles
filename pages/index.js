import React from 'react';

import App from '../components/app';
import Submit from '../components/submit';
import withData from '../lib/withData';
import Layout from '../components/MyLayout.js'
//import Link from 'next/link'

export default withData(() => (
    <App>
        <Layout>
            <Submit/>

        </Layout>
    </App>
));
