const express = require('express'),
    app = express()
    Video = require('../models/video')
    bodyParser = require('body-parser')
    dbConnection = {}
;

require('../clients/mongoClient');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../routes/videoRoutes'); //importing route
routes(app); //register the route

//
app.get('/', (req, res) => res.json({"status":"active"}));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
