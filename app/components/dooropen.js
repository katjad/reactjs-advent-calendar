var React = require('react');
var DoorInside = require('./doorinside');
var winconfig = require('./../../lib/winconfig');


var DoorOpen = React.createClass({displayName: 'DoorOpen',
    handleUserInput: function(){
        this.props.onUserInput()
    },
    componentDidMount: function(){
      var dooropen = this.refs.dooropen.getDOMNode();
        dooropen.focus();
    },
    pixelize: function(size){
        return size + 'px';
    },
    render: function(){

        var colour = this.props.coloursize['colour'];
        var size = this.props.coloursize['size'];

        // duplicate of doorshutani, put in config file? 
        var width_win = winconfig['width_win'] - size;
        var height_win = winconfig['height_win'] - size, height_winpx = this.pixelize(height_win);
        var margin_innerframe = winconfig['margin_innerframe'], margin_innerframepx = this.pixelize(margin_innerframe);
        var border = winconfig['border'], borderpx = this.pixelize(border) + ' solid rgba(255,255, 255, 0.5)';

        var width_win_open = (1.75*width_win +2), width_win_openpx = this.pixelize(width_win_open);
        var width_shutter_open = (width_win /2)*0.75, width_shutter_openpx = this.pixelize(width_shutter_open);
        var width_shutter_open_innerpx = this.pixelize(width_shutter_open - 2*(margin_innerframe + border));
        var height_shutter_innerpx = this.pixelize(height_win - 2*(margin_innerframe + border));        
        var width_win_inner = width_win - 2, width_win_innerpx = this.pixelize(width_win_inner); 
        var height_win_inner = height_win - 2, height_win_innerpx = this.pixelize(height_win_inner); 

        var styles_frame = {
            width: width_win_openpx,
            height: height_winpx
        };  
        var styles_shutter_open = {
            width: width_shutter_openpx,
            height: height_winpx,
            background: colour,
            float: 'left'
        };
        var styles_shutter_open_inner = {
            border: borderpx,
            width: width_shutter_open_innerpx,
            height: height_shutter_innerpx,
            margin: margin_innerframepx
        };
        var styles_win_inner = {
            width: width_win_innerpx,
            height: height_win_innerpx,
            border: '1px solid #ddd',
            float: 'left'
        };
        return  React.createElement("div", {tabIndex: "0", ref: "dooropen", style: styles_frame}, 
                React.createElement("div", {className: "wrapper", style: {"margin" : "0 auto"}}, 
                        React.createElement("div", {style: styles_shutter_open}, 
                            React.createElement("div", {style: styles_shutter_open_inner})
                        ), 
                        React.createElement("div", {className: "text", style: styles_win_inner}, 
                            React.createElement(DoorInside, {
                                content: this.props.content, 
                                ident: this.props.ident, 
                                onUserInput: this.handleUserInput}

                            )
                        ), 
                        React.createElement("div", {style: styles_shutter_open}, 
                            React.createElement("div", {style: styles_shutter_open_inner})
                        )
                )
        )

    }
});

module.exports = DoorOpen
