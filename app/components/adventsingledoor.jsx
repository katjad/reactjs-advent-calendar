var React = require('react'),
    request = require('superagent'),
    navigate = require('./../../lib/navigate');;



var AdventSingleDoor = React.createClass({
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
       var pic = (this.state.pic === true) ? <img src={url} /> : <p></p> ;
      
       
       return <div className="singledoor-wrapper">
              <div className="singledoor">
              <div className="singledoor-inner">

               <form>
                   <button onClick={this.submit} >Back to Calendar</button>
               </form>

              <h1 dangerouslySetInnerHTML={{__html: daycontent.title}}></h1>
               <div style={{textAlign: "center"}}> {pic} </div>
               
               <div dangerouslySetInnerHTML={{__html: daycontent.text}}></div>
     
               <form>
                   <button onClick={this.submit} >Back to Calendar</button>
               </form>
               </div>
              </div>
              </div>
    }
});


module.exports = AdventSingleDoor



