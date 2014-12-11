var React = require('react');
var DoorInside = require('./doorinside');


var DoorOpen = React.createClass({displayName: 'DoorOpen',
    handleUserInput: function(){
        this.props.onUserInput()
    },
    componentDidMount: function(){
      var dooropen = this.refs.dooropen.getDOMNode();
        dooropen.focus();
    },
    render: function(){
        var colour = this.props.coloursize['colour'];
        var size = this.props.coloursize['size'];
        var width_outer = (436 - size).toString() + 'px';
        var height_outer = (260 - size).toString() + 'px';
        var height_inner = (250 -size).toString() + 'px';
        var width_text = (224 - size).toString() + 'px';
        var height_text = (258 - size).toString() + 'px';

        var styles_frame = {
            width: width_outer,
            height: height_outer,
            margin: '50px 0'
        };
        var styles_shutter = {
            width: '80px',
            height: height_outer,
            background: colour,
            float: 'left'
        };
        var styles_inner = {
            border: '1px #fff solid',
            width: '70px',
            height: height_inner,
            margin: '5px'
        };
        var styles_text = {
            width: width_text,
            height: height_text,
            border: '1px solid #333',
            float: 'left',
            padding: '0 25px'
        };
        return  React.createElement("div", {tabIndex: "0", ref: "dooropen", style: styles_frame}, 
                React.createElement("div", {className: "wrapper", style: {"margin" : "0 auto"}}, 
                        React.createElement("div", {style: styles_shutter}, 
                            React.createElement("div", {style: styles_inner})
                        ), 
                        React.createElement("div", {className: "text", style: styles_text}, 
                            React.createElement(DoorInside, {
                                content: this.props.content, 
                                ident: this.props.ident, 
                                onUserInput: this.handleUserInput}

                            )
                        ), 
                        React.createElement("div", {style: styles_shutter}, 
                            React.createElement("div", {style: styles_inner})
                        )
                )
        )

    }
});

module.exports = DoorOpen
