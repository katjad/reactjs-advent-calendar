var React = require('react/addons');




var DoorShutAni = React.createClass({

    clickHandler: function(){

        var node = this.getDOMNode();
        var items = node.getElementsByClassName('item');
        this.addClassName(items[0], 'active');
        this.addClassName(items[1], 'active');
        this.timer = window.setTimeout(this.props.onUserInput, 500);   

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
          //console.log(this.refs.shut.getDOMNode());
          this.refs.shut.getDOMNode().focus();
      }
    },
    componentWillUnmount: function(){
        window.clearTimeout(this.timer);
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
            margin: '50px 100px'
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
       

        <div className = "item left"  >
          <div className="info-wrap" style={{width: width_shutter}}>
            <div className="info left">

                <div className="info-front"  style={styles_shutter}>
                    <div style={styles_inner}></div>
                </div>
                <div className="info-back"  style={styles_shutter}>
                     <div style={styles_inner}></div>
                </div>
                          

            </div>
          </div>      
        </div>  
       

        <div className= "item right" >
          <div className ="info-wrap" style={{width: width_shutter}}>
            <div className ="info right">

            <div className="info-front" style={styles_shutter} >
                <div style={styles_inner}></div>
            </div>
            <div className ="info-back" style={styles_shutter}>
                 <div style={styles_inner}></div>
            </div>

            </div>
          </div>      
        </div>  

      

        </div></span>




    }
});

module.exports = DoorShutAni
