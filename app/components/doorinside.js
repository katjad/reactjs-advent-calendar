var React = require('react');
var navigate = require('./../../lib/navigate');


var DoorInside = React.createClass({displayName: 'DoorInside',

    clickHandler: function(){
        this.props.onUserInput();
    },
    submit: function(evt) {
        evt.preventDefault();
        var url = '/open/' + this.props.ident;
        navigate(url);
    },

    render: function(){

        /*var door = {
            title: 'Kraftwerk',
            text: 'I was just listening to my guilty pleasure – the Absolute Eighties '+
            'digital-radio station after eating a plate of pasta – when what should '+
            'come on but "The Model" by German electro-synth outfit Kraftwerk. '+
            'Their name, which is usually totally mangled by English-speaking types, '+
            'has two halves: Kraft and werk. Kraft for some reason means "power".'
        }*/
        var daycontent = JSON.parse(this.props.content)
        return React.createElement("span", null, React.createElement("h2", {style: {display: 'inline'}}, "Word of the day"), React.createElement("br", null), 
            React.createElement("h2", {style: {display:'inline'}}, "Wort des Tages"), 
            React.createElement("h3", {style: {color: 'red'}}, daycontent.title), 
            React.createElement("p", {dangerouslySetInnerHTML: {__html: daycontent.text}}), 
            React.createElement("form", null, 
            React.createElement("button", {onClick: this.submit}, "Read more")
            ), 
            React.createElement("p", null), 
            React.createElement("button", {onClick: this.clickHandler}, "Shut"));
    }
});

module.exports = DoorInside
