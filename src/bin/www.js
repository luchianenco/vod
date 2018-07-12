const express = require('express'),
    app = express()
    Video = require('../models/video')
    bodyParser = require('body-parser')
    dbConnection = {}
;

require('../clients/mongoClient');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//importing route
const videoRoutes = require('../routes/videoRoutes');
const filterRoutes = require('../routes/filterRoutes');
//register the route
videoRoutes(app);
filterRoutes(app);

//
app.get('/', (req, res) => res.json({"status":"active"}));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
