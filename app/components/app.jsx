var React = require('react'),
    RouterMixin = require('./../../lib/RouterMixin'),
    AdventCal = require('./adventcal'),
    AdventSingleDoor = require('./adventsingledoor'),
    request = require('superagent');

var doorcontent = JSON.stringify({"title":"A door!", "text":"This is the text in the advent calendar. Would it tage an image tag: <img src=\"\"> or like that &lt;img src=\"\"&gt;"});


var App = React.createClass({

    routes: {
        '/':'viewAllDoors',
        '/open/:number': 'viewDoor'
    },

    mixins: [RouterMixin],

    render: function() {
        return <div>{this.renderCurrentRoute()}</div>
    },

    viewAllDoors: function(){
         return <AdventCal  />
    },

    viewDoor: function(number) {
        return <AdventSingleDoor ident={number} />
    },

    notFound: function(path) {
        return <div class="not-found">Uh oh. You've arrived somewhere that doesn't exist.</div>;
    }

})

module.exports = App;
