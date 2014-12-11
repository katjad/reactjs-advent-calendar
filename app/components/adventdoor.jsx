var React = require('react/addons');
var DoorShutAni = require('./doorshutani');
var DoorOpen = require('./dooropen');
var coloursizes = require('./../../lib/coloursize');




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
        var size = coloursize['size'];
        
        return show ? <DoorOpen

            ident={id}
            onUserInput={this.handleUserInput}
            coloursize ={coloursize}
            content={this.props.content}

             />

            : 
           
            <DoorShutAni
            ident = {id}
            onUserInput={this.handleUserInput}
            coloursize = {coloursize}
        />
    }
});


module.exports = AdventDoor
