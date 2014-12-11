var React = require('react');
var AdventDoor = require('./adventdoor');
var request = require('superagent');

var coloursizes = require('./../../lib/coloursize');

var contents = [];
var count = 0;

var AdventCal = React.createClass({
    getInitialState: function(){
      return ({contents : []})
    },
    componentDidMount: function(){
        for(var i = 1; i < 25; i++){
            this.getContents(i);
        }
    },
    getContents: function(index)     {
        var self = this;
        request.get('/days/' + index + '.json')
            .end(function (error, res) {
                if (error) {
                    console.error;
                }
                contents[index] = res.text;
                count++;

                if(count == 24){
                   if(self.isMounted()){
                        self.setState({contents: contents});
                   };
                }
        });
    },
    render: function(){     
        var doors = this.state.contents.map(function(content, index){
            var size = coloursizes[index - 1]['size'];
            var width_wrapper = (436 - size) + 'px';
            return <div style={{"float":"left", marginRight: "15px", width: width_wrapper}} >
                <AdventDoor
                content={content}
                key={index}
                ident={index}
                />
            </div>
    });

        return <div>{doors}</div>;
    }
});

module.exports = AdventCal
