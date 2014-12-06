var React = require('react');

var DoorShut = React.createClass({
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
        return <span><div style={styles_outer} onClick={this.clickHandler} >
            <div style={styles_inner}></div>
            <div style={styles_inner}></div>
        </div></span>

    }
});

module.exports = DoorShut
