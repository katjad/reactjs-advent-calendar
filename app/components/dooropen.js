var React = require('react');
var DoorInside = require('./doorinside');

var DoorOpen = React.createClass({displayName: 'DoorOpen',
    handleUserInput: function(){
        this.props.onUserInput()
    },
    render: function(){
        var styles_frame = {
            width: '600px',
            height: '360px',
            margin: '50px 0'
        };
        var styles_shutter = {
            width: '100px',
            height: '360px',
            background: '#448',
            float: 'left'
        };
        var styles_inner = {
            border: '1px #fff solid',
            width: '90px',
            height: '350px',
            margin: '5px'
        };
        var styles_text = {
            width: '325px',
            height: '358px',
            border: '1px solid #333',
            float: 'left',
            padding: '0 1.5em'
        };
        return  React.createElement("div", {style: styles_frame}, 
            React.createElement("div", {style: styles_shutter}, 
                React.createElement("div", {style: styles_inner})
            ), 
            React.createElement("div", {className: "text", style: styles_text}, 
                React.createElement(DoorInside, {content: this.props.content, ident: this.props.ident, onUserInput: this.handleUserInput})
            ), 
            React.createElement("div", {style: styles_shutter}, 
                React.createElement("div", {style: styles_inner})
            )
        )

    }
});

module.exports = DoorOpen
