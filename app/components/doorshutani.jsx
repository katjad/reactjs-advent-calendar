var React = require('react');
var winconfig = require('./../../lib/winconfig');

var DoorShutAni = React.createClass({

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
    pixelize: function(size){
        return size + 'px';
    },
    render: function(){

        var colour = this.props.coloursize['colour'];
        var size = this.props.coloursize['size'];
        
        // settings from config file, adding pixel units
        var width_win = winconfig['width_win'] - size, width_winpx = this.pixelize(width_win);
        var height_win = winconfig['height_win'] -size, height_winpx = this.pixelize(height_win);  
        var margin_innerframe = winconfig['margin_innerframe'], margin_innerframepx = this.pixelize(margin_innerframe);
        var border = winconfig['border'], borderpx = this.pixelize(border) + ' solid rgba(255,255, 255, 0.5)';

        // calculated from settings
        var width_shutter = (width_win / 2), width_shutterpx = this.pixelize(width_shutter);
        var width_shutter_innerpx = this.pixelize(width_shutter - 2*(margin_innerframe + border));
        var height_shutter_innerpx = this.pixelize(height_win - 2*(margin_innerframe + border));
        var margin_outerpx = '0 '+(width_shutter*0.75)+'px';

       
        // Number styles
        var number_margintop = (height_win/2 - 60) + 'px';
        var number_marginleft = (this.props.ident >= 9) ? '-55px' : '-30px' ; //bigger margin if two digits


        var styles_windowshut = {
            width: width_winpx,
            height: height_winpx,
            margin: margin_outerpx
        };
        var styles_shutter = {
            height: height_winpx,
            width: width_shutterpx,
            background: colour
        };
        var styles_shutter_inner = {
            width: width_shutter_innerpx,
            height: height_shutter_innerpx,
            margin: margin_innerframepx,
            border: borderpx
        };
        var styles_number = {
            marginTop: number_margintop,
            marginLeft: number_marginleft,
            color: 'rgba(255,255, 255, 0.5)',
            fontSize: '80px',
            fontWeight: 'bold'
        };

        return <span><div tabIndex="0" ref="shut"
            style={styles_windowshut}
            onClick={this.clickHandler}
            onKeyDown={this.keyHandler}
        >
       

        <div className = "item left"  >
          <div className="info-wrap" style={{width: width_shutter}}>
            <div className="info left">

                <div className="info-front"  style={styles_shutter}>
                    <div style={styles_shutter_inner}></div>
                </div>
                <div className="info-back"  style={styles_shutter}>
                     <div style={styles_shutter_inner}></div>
                </div> 

            </div>
          </div>      
        </div>  

        <div className= "item right" >
          <div className ="info-wrap" style={{width: width_shutter}}>
            <div className ="info right">

            <div className="info-front" style={styles_shutter} >
                <div style={styles_shutter_inner}><div style={styles_number}>{this.props.ident + 1}</div></div>
            </div>
            <div className ="info-back" style={styles_shutter}>
                 <div style={styles_shutter_inner}></div>
            </div>

            </div>
          </div>      
        </div> 

        </div></span>
    }
});

module.exports = DoorShutAni
