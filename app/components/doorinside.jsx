var React = require('react');
var navigate = require('./../../lib/navigate');


var DoorInside = React.createClass({

    clickHandler: function(){
        this.props.onUserInput();
    },
    keyHandler: function(event){
        if(event.keyCode === 13) {
            this.clickHandler();
        }
    },
    submit: function(evt) {
        evt.preventDefault();
        var url = '/open/' + (this.props.ident + 1);
        navigate(url);
    },
    getFirstWords: function(text){
        var nrw = 15;                // the number of words we want to extract
        var rgxwords = new RegExp('([^ ]*[ ]{0,1}){1,'+nrw+'}', 'g');      // regexp for specified number of space
        text = text.replace(/\<[^\>]*\>/gi, '');      // remove HTML tags
        text = text.replace(/\s\s+/g, ' ');           // replace multiple whitespaces whit single space
        var txt = text.match(rgxwords)[0];            // get the substring with "nrw" number of words

        return txt;
    },
    render: function(){
        var daycontent = JSON.parse(this.props.content);
        var shortened = this.getFirstWords(daycontent.text) + '&hellip;';
        return <span>
        <div style={{margin: '12px'}}>
            <h3 dangerouslySetInnerHTML={{__html: daycontent.title}} ></h3>
            <p dangerouslySetInnerHTML={{__html: shortened}}></p>
            <form style={{float: "left", marginRight: "15px"}}>
            <button onClick={this.submit} >Read more</button>
            </form>
            
            <button style={{float: "left"}} onClick={this.clickHandler} >Shut</button>
        </div>
        </span>;
    }
});

module.exports = DoorInside
