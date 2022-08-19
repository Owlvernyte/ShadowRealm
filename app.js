const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const route = require('./routes/index');
const heroRoute = require('./routes/heroRoute');
const userHeroRoute = require('./routes/userHeroRoute');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', route);
app.use('/heros', heroRoute);
app.use('/userHeros', userHeroRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});