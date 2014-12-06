var React = require('react');
var AdventDoor = require('./adventdoor');
var request = require('superagent');

contents = [];
var count = 0


var AdventCal = React.createClass({
    getInitialState: function(){
      return ({contents : []})
    },
    componentDidMount: function(){
        for(var i = 1; i < 5; i++){
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

                if(count == 4){
                   if(self.isMounted()){
                        self.setState({contents: contents});
                   };
                }
        });
    },
    render: function(){
        //this.props.filecontents = [{"title":"title1", "text": "text1"}, {"title":"title1", "text": "text1"},
          //  {"title":"title1", "text": "text1"}, {"title":"title1", "text": "text1"}]
        //this.props.filecontents = contents;
        var doors = this.state.contents.map(function(content, index){
            return  <AdventDoor content={content} key={index} ident={index} />
    });

        return <div>{doors}</div>;
    }
});

module.exports = AdventCal
