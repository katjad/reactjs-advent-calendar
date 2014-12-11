var React = require('react/addons');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var DoorShutAni = React.createClass({

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
        var width_outer = (224 - size).toString() + 'px';
        var height_outer = (260 -size).toString() + 'px';
        var width_shutter = ((224 - size)/2) + 'px';
        var width_inner = ((200 - size)/2) + 'px';
        var height_inner = (250 - size) + 'px';
        var styles_outer = {
            width: width_outer,
            height: height_outer,
            background: colour,
            margin: '50px 108px'
        };
        var styles_shutter = {
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
      

        <div className = "item left" style={styles_shutter} >
          <div className="info-wrap" >
            <div className="info left">

                <div className="info-front">
                    <div style={styles_inner}></div>
                </div>
                <div className="info-back" style={{backgroundColor: "#c2ddb6"}}>
                    <h3>OPEN!</h3>
                </div>

            </div>
          </div>      
        </div>  
       

        <div className= "item right" style={styles_shutter} >
          <div className ="info-wrap" >
            <div className ="info right">

            <div className="info-front" >
                <div style={styles_inner}></div>
            </div>
            <div className ="info-back" style={{backgroundColor: "#c2ddb6"}}>
                <h3>OPEN!</h3>
            </div>

            </div>
          </div>      
        </div>  

      

        </div></span>




    }
});

module.exports = DoorShutAni
