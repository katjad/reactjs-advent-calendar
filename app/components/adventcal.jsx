var React = require('react');
var AdventDoor = require('./adventdoor');
var request = require('superagent');

var coloursizes = require('./../../lib/coloursize');
var winconfig = require('./../../lib/winconfig');

var contents = [];

var AdventCal = React.createClass({
    getInitialState: function(){
      return ({contents : []})
    },
    componentDidMount: function(){     
        for(var i = 1; i < 25; i++){
            if(i == 24 ){
              this.timer = window.setTimeout(this.focusOnTop, 500);
            }
            this.getContents(i);
        }  
    },
    componentWillUnmount: function(){
        window.clearTimeout(this.timer);
    },
    focusOnTop: function(){
        //this.refs.top.getDOMNode().focus();
        document.getElementById('top').focus();
    },
    getContents: function(index)     {
        var self = this;
        request.get('/days/' + index + '.json')
            .end(function (error, res) {
                console.log("end");
                if (error) {
                    console.error;
                }
                contents[index] = res.text;
                    self.setState({contents: contents});
        });
    }, 
    render: function(){               
        var doors = this.state.contents.map(function(content, index){
            var size = coloursizes[index - 1]['size'];
            var width_wrapper = ((winconfig['width_win'] - size)*1.75) + 'px';   
            var height_wrapper = (winconfig['height_win'] - size + 10) + 'px'; 
            return <div style={{"float":"left", width: width_wrapper, height: height_wrapper, margin: "15px"}} >
                <AdventDoor
                content={content}
                key={index}
                ident={index}
                />
            </div>
    });

        return <div style={{marginLeft: '15px'}}>
      
        {doors}


   
        </div>;
    }
});

module.exports = AdventCal
