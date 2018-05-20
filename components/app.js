import React from 'react';
import Head from 'next/head';
import {ThemeProvider} from 'styled-components';
import {Theme} from '../styles/theme';
import Notifications, {notify} from 'react-notify-toast';

export default ({children}) => (
    <div>
        <Head>
            <title>Influencers</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                  crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        </Head>
        <Notifications />
        <ThemeProvider theme={() => Theme}>
            {children}
        </ThemeProvider>
    </div>
);