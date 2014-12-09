var React = require('react');
var DoorShut = require('./doorshut');
var DoorOpen = require('./dooropen');
var coloursizes = require('./../../lib/coloursize');


var AdventDoor = React.createClass({displayName: 'AdventDoor',
    getInitialState: function(){
        return {
            show: false
        }
    },
    handleUserInput: function(){
        var show = !this.state.show;
        this.setState({show: show});
    },
    render: function(){
        //console.log("key:" + this.props.ident);
        var show = this.state.show;
        var id = this.props.ident;
        var coloursize = coloursizes[id];
        return show ? React.createElement(DoorOpen, {
            ident: id, 
            onUserInput: this.handleUserInput, 
            coloursize: coloursize, 
            content: this.props.content}
             )
            : React.createElement(DoorShut, {
            ident: id, 
            onUserInput: this.handleUserInput, 
            coloursize: coloursize}
        )
    }
});


module.exports = AdventDoor
