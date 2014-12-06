var React = require('react');
var DoorShut = require('./doorshut');
var DoorOpen = require('./dooropen');


var AdventDoor = React.createClass({displayName: 'AdventDoor',
    getInitialState: function(){
        return {
            show: false
        }
    },
    handleUserInput: function(){
        var show = !this.state.show;
        this.setState({show: show})
    },
    render: function(){
        //console.log("key:" + this.props.ident);
        var show = this.state.show;
        return show ? React.createElement(DoorOpen, {onUserInput: this.handleUserInput, content: this.props.content, ident: this.props.ident}) : React.createElement(DoorShut, {onUserInput: this.handleUserInput})
    }
});


module.exports = AdventDoor
