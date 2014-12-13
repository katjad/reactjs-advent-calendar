var React = require('react/addons');


// set the measures for the windows here - take care they correspond to values in dooropen.jsx
// 
var maxwidth_window = 224; //px
var maxheight_window = 270;
var margin_window = '50px 100px';  // left and right margin used for calculations in dooropen.jsx

var maxwidth_shutterinner = maxwidth_window - 40;  // ! double the value of dooropen.jsx
var maxheight_shutterinner = maxheight_window - 20;




var DoorShutAni = React.createClass({displayName: 'DoorShutAni',

    clickHandler: function(){
        if(this.checkDate()){
        var node = this.getDOMNode();
        var items = node.getElementsByClassName('item');
        this.addClassName(items[0], 'active');
        this.addClassName(items[1], 'active');
        this.timer = window.setTimeout(this.props.onUserInput, 500); 
        } else {
            alert("I'm a good old-fashioned alert telling you it's to early for this one.")
        }  
    },
    checkDate: function(){
        var today = new Date().getDate();
        if(this.props.ident < today){
            return true;
        }
    },
    addClassName: function(element, addclass){
         element.className = element.className + ' ' + addclass;  
    },
    keyHandler: function(event){
        if(event.keyCode === 13) {
            this.clickHandler();
        }
    },
    componentDidMount: function(){
      if(this.isMounted) {
          this.refs.shut.getDOMNode().focus();
        }
    },
    componentWillUnmount: function(){
        window.clearTimeout(this.timer);
    },
    render: function(){
        var colour = this.props.coloursize['colour'];
        var size = this.props.coloursize['size'];

        var width_window = (maxwidth_window - size) + 'px';
        var height_window = (maxheight_window -size) + 'px';
        var width_shutter = ((maxwidth_window - size)/2) + 'px';
        var width_inner = ((maxwidth_shutterinner - size)/2) + 'px';
        var height_inner = (maxheight_shutterinner - size) + 'px';
        var number_margintop = ((maxheight_window -size)/2 - 60) + 'px';
        var number_marginleft = (this.props.ident >= 9) ? '-55px' : '-30px' ; //bigger margin if two digits

        var styles_outer = {
            width: width_window,
            height: height_window,
            margin: margin_window
        };
        var styles_shutter = {
            height: height_window,
            width: width_shutter,
            background: colour
        };
        var styles_inner = {
            width: width_inner,
            height: height_inner,
            margin: '10px',
            border: '1px solid #fff',           

        };
        var styles_number = {
            marginTop: number_margintop,
            marginLeft: number_marginleft,
            color: '#fff',
            fontSize: '80px',
            fontWeight: 'bold'
        }

        return React.createElement("span", null, React.createElement("div", {tabIndex: "0", ref: "shut", 
            style: styles_outer, 
            onClick: this.clickHandler, 
            onKeyDown: this.keyHandler
        }, 
       

        React.createElement("div", {className: "item left"}, 
          React.createElement("div", {className: "info-wrap", style: {width: width_shutter}}, 
            React.createElement("div", {className: "info left"}, 

                React.createElement("div", {className: "info-front", style: styles_shutter}, 
                    React.createElement("div", {style: styles_inner})
                ), 
                React.createElement("div", {className: "info-back", style: styles_shutter}, 
                     React.createElement("div", {style: styles_inner})
                )
                          

            )
          )
        ), 
       

        React.createElement("div", {className: "item right"}, 
          React.createElement("div", {className: "info-wrap", style: {width: width_shutter}}, 
            React.createElement("div", {className: "info right"}, 

            React.createElement("div", {className: "info-front", style: styles_shutter}, 
                React.createElement("div", {style: styles_inner}, React.createElement("div", {style: styles_number}, this.props.ident + 1))
            ), 
            React.createElement("div", {className: "info-back", style: styles_shutter}, 
                 React.createElement("div", {style: styles_inner})
            )

            )
          )
        )

      

        ))




    }
});

module.exports = DoorShutAni
