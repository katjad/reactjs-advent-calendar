var React = require('react');

var DoorShut = React.createClass({displayName: 'DoorShut',
    clickHandler: function(){
        this.props.onUserInput();
    },
    render: function(){
        var styles_outer = {
            width: '325px',
            height: '360px',
            background: '#448',
            margin: '50px 100px'
        };
        var styles_inner = {
            width: '150px',
            height: '350px',
            margin: '5px',
            border: '1px solid #fff',
            float: 'left'
        };
        return React.createElement("span", null, React.createElement("div", {style: styles_outer, onClick: this.clickHandler}, 
            React.createElement("div", {style: styles_inner}), 
            React.createElement("div", {style: styles_inner})
        ))

    }
});

module.exports = DoorShut
