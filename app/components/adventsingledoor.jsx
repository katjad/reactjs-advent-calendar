var React = require('react'),
    request = require('superagent'),
    navigate = require('./../../lib/navigate');;



var AdventSingleDoor = React.createClass({
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

       return <div><h1>{daycontent.title}</h1>
               <div>{daycontent.text}</div>
               <form>
                   <button onClick={this.submit} >Back to Calendar</button>
               </form>
              </div>
    }
});


module.exports = AdventSingleDoor



