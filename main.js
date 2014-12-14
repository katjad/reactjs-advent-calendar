var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    React = require('react'),
    plates = require('plates'),
    App = React.createFactory(require('./app/components/app'));
var app = express()

app.use(bodyParser.json());


app.get('/', function(req, res){
    var appHtml = React.renderToString(App({ path: '/'}));

    render(res, appHtml, {history: req.query.mode !== 'hash' });
})

app.use(express.static(path.join(__dirname, 'public')));


app.get('/open/:day', function(req, res) {

    var appHtml = React.renderToString(App({ path: '/open/:day'}));

    render(res, appHtml, {history: req.query.mode !== 'hash' });

});



app.listen(8081, function(){
    console.log("Server listening on port 8081");
});

function render(res, appHtml, appData) {
    fs.readFile(
        path.join(__dirname, 'public', 'index.html'),
        { encoding: 'utf-8'},
        function(err, tmpl) {
            var html = plates.bind(tmpl, {
                app: appHtml,
                appData: 'APP_DATA = ' + JSON.stringify(appData)
            });

            res.set('Content-Type', 'text/html');
            res.send(html);
        }
    );
}

