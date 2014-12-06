var React = require('react'),
    RouterMixin = require('./../../lib/RouterMixin'),
    AdventCal = require('./adventcal'),
    AdventSingleDoor = require('./adventsingledoor'),
    request = require('superagent');

var doorcontent = JSON.stringify({"title":"A door!", "text":"This is the text in the advent calendar. Would it tage an image tag: <img src=\"\"> or like that &lt;img src=\"\"&gt;"});


var App = React.createClass({displayName: 'App',

    routes: {
        '/':'viewAllDoors',
        '/open/:number': 'viewDoor'
    },

    mixins: [RouterMixin],

    render: function() {
        return React.createElement("div", null, this.renderCurrentRoute())
    },

    viewAllDoors: function(){
         return React.createElement(AdventCal, null)
    },

    viewDoor: function(number) {
        return React.createElement(AdventSingleDoor, {ident: number})
    },

    notFound: function(path) {
        return React.createElement("div", {class: "not-found"}, "Uh oh. You've arrived somewhere that doesn't exist.");
    }

})

module.exports = App;
