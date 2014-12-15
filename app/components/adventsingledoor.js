var React = require('react'),
    request = require('superagent'),
    navigate = require('./../../lib/navigate');;



var AdventSingleDoor = React.createClass({displayName: 'AdventSingleDoor',
    getInitialState: function(){
        return {
            content: "",
            pic: false
        }
    },
    submit: function(evt) {
        evt.preventDefault();
        var url = '/';
        navigate(url);        
    },
    componentDidMount: function() {
        this.getContent();
        var url = '/pics/' + this.props.ident + '.jpg'; 
        this.urlExists(url);    
        this.refs.topbutton.getDOMNode().focus();  
    },
    getContent: function(){
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
    urlExists: function(url){
        request.get(url)
        .end(function (err, res) {
            if(res.status != 404){
            self.setState({pic : true});
            } 
        });  
    },
    render: function(){
       var daycontent = this.state.content;
       var url = '/pics/' + this.props.ident + '.jpg'; 
       console.log("state pic:" + this.state.pic);
       var pic = (this.state.pic === true) ? React.createElement("img", {src: url}) : React.createElement("p", null) ;
      
       
       return React.createElement("div", {className: "singledoor-wrapper"}, 
              React.createElement("div", {className: "singledoor"}, 
              React.createElement("div", {className: "singledoor-inner"}, 

               React.createElement("form", null, 
                   React.createElement("button", {ref: "topbutton", onClick: this.submit}, "Back to Calendar")
               ), 

              React.createElement("h1", {dangerouslySetInnerHTML: {__html: daycontent.title}}), 
               React.createElement("div", {style: {textAlign: "center"}}, " ", pic, " "), 
               
               React.createElement("div", {dangerouslySetInnerHTML: {__html: daycontent.text}}), 
     
               React.createElement("form", null, 
                   React.createElement("button", {onClick: this.submit}, "Back to Calendar")
               )
               )
              )
              )
    }
});


module.exports = AdventSingleDoor



