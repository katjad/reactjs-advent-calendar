var React = require('react');



var DoorShut = React.createClass({
    clickHandler: function(){
        this.props.onUserInput();

    },
    keyHandler: function(event){

        if(event.keyCode === 13) {
            this.clickHandler();

        }
    },
    componentDidMount: function(){
      if(this.isMounted) {
          console.log(this.refs.shut.getDOMNode());
          this.refs.shut.getDOMNode().focus();
      }
    },
    render: function(){
        var colour = this.props.coloursize['colour'];
        var size = this.props.coloursize['size'];
        var width_outer = (225 - size).toString() + 'px';
        var height_outer = (260 -size).toString() + 'px';
        var width_shutter = ((225 - size)/2) + 'px';
        var width_inner = ((200 - size)/2) + 'px';
        var height_inner = (250 - size) + 'px';
        var styles_outer = {
            width: width_outer,
            height: height_outer,
            background: colour,
            margin: '50px 100px'
        };
        var styles_shutter = {
            float: 'left',
            height: height_outer,
            width: width_shutter,
            background: colour
        };
        var styles_inner = {
            width: width_inner,
            height: height_inner,
            margin: '5px',
            border: '1px solid #fff'

        };
        return <span><div tabIndex="0" ref="shut"
            style={styles_outer}
            onClick={this.clickHandler}
            onKeyDown={this.keyHandler}
        >
            <div className="door left" style={styles_shutter}>
                <div style={styles_inner}></div>
            </div>
            <div className="door right" style={styles_shutter}>
                <div style={styles_inner}></div>
            </div>

        </div></span>

    }
});

module.exports = DoorShut
