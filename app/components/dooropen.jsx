var React = require('react');
var DoorInside = require('./doorinside');


// set the measures for the windows here - take care they correspond to values in doorshutani.jsx
var maxwidth_window = 224; //px
var maxheight_window = 270; 
var maxheight_shutterinner = maxheight_window - 20; 

var width_openshutter = 80;
var width_openshutterinner = width_openshutter - 20;
var margin_window = '50px 0'; // top and bottom margin same as in doorshutani.jsx
var margin_shut_leftright = 100; // taken from doorshutani.jsx

var maxwidth_outer = maxwidth_window + (2*width_openshutter) + (margin_shut_leftright/2) + 2;      //436


var DoorOpen = React.createClass({
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
        var width_outer = (maxwidth_outer - size).toString() + 'px';
        var height_outer = (maxheight_window - size).toString() + 'px';
        var height_inner = (maxheight_shutterinner -size).toString() + 'px';
        var width_text = (maxwidth_window - size).toString() + 'px';
        var height_text = (maxheight_window - 2 - size).toString() + 'px';

        var styles_frame = {
            width: width_outer,
            height: height_outer,
            margin: margin_window
        };
        var styles_shutter = {
            width: width_openshutter,
            height: height_outer,
            background: colour,
            float: 'left'
        };
        var styles_inner = {
            border: '1px #fff solid',
            width: width_openshutterinner,
            height: height_inner,
            margin: '10px'
        };
        var styles_text = {
            width: width_text,
            height: height_text,
            border: '1px solid #333',
            float: 'left',
            padding: '0 25px'
        };
        return  <div tabIndex="0" ref="dooropen" style={styles_frame}  >
                <div className = "wrapper" style= {{"margin" : "0 auto"}}>
                        <div style={styles_shutter}>
                            <div style={styles_inner} ></div>
                        </div>
                        <div className="text" style={styles_text} >
                            <DoorInside
                                content={this.props.content}
                                ident={this.props.ident}
                                onUserInput={this.handleUserInput}

                            />
                        </div>
                        <div style={styles_shutter}>
                            <div style={styles_inner} ></div>
                        </div>
                </div>
        </div>

    }
});

module.exports = DoorOpen
