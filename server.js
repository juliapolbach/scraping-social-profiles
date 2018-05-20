// npm packages
const next = require('next');
const bodyParser = require('body-parser');
const express = require('express');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');

// our packages
const schema = require('./Data/schema');

// next.js setup
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        server.use(favicon(path.join(__dirname,'favicon.ico')));
        server.use('/favicon.ico', express.static('favicon.ico'));
        server.use(cors());

        //graphQL
        server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
        server.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });

