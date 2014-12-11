var React = require('react/addons');
var DoorShutAni = require('./doorshutani');
var DoorOpen = require('./dooropen');
var coloursizes = require('./../../lib/coloursize');


 var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var AdventDoor = React.createClass({
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
        var id = parseInt(this.props.ident) - 1;
        var coloursize = coloursizes[id];
        return show ? <DoorOpen
            ident={id}
            onUserInput={this.handleUserInput}
            coloursize ={coloursize}
            content={this.props.content}

             />

            : 
            <ReactCSSTransitionGroup transitionName="shutter">
            <DoorShutAni
            ident = {id}
            onUserInput={this.handleUserInput}
            coloursize = {coloursize}
        /></ReactCSSTransitionGroup>
    }
});


module.exports = AdventDoor
