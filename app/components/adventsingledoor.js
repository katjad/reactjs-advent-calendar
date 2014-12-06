var React = require('react'),
    request = require('superagent'),
    navigate = require('./../../lib/navigate');;



var AdventSingleDoor = React.createClass({displayName: 'AdventSingleDoor',
    getInitialState: function(){
        return {
            content: ""
        }
    },
    submit: function(evt) {
        evt.preventDefault();
        navigate('/');
    },
    componentDidMount: function() {
        self = this;
        var index = this.props.ident;
        request.get('/days/' + index + '.json')
            .end(function (error, res) {
                if (error) {
                    console.error;
                }
                self.setState({content: res.body});
            });
    },
    render: function(){
       var daycontent = this.state.content;

       return React.createElement("div", null, React.createElement("h1", null, daycontent.title), 
               React.createElement("div", null, daycontent.text), 
               React.createElement("form", null, 
                   React.createElement("button", {onClick: this.submit}, "Back to Calendar")
               )
              )
    }
});


module.exports = AdventSingleDoor



