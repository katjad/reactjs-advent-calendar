var React = require('react');
var navigate = require('./../../lib/navigate');


var DoorInside = React.createClass({

    clickHandler: function(){
        this.props.onUserInput();
    },
    submit: function(evt) {
        evt.preventDefault();
        var url = '/open/' + this.props.ident;
        navigate(url);
    },

    render: function(){

        /*var door = {
            title: 'Kraftwerk',
            text: 'I was just listening to my guilty pleasure – the Absolute Eighties '+
            'digital-radio station after eating a plate of pasta – when what should '+
            'come on but "The Model" by German electro-synth outfit Kraftwerk. '+
            'Their name, which is usually totally mangled by English-speaking types, '+
            'has two halves: Kraft and werk. Kraft for some reason means "power".'
        }*/
        var daycontent = JSON.parse(this.props.content)
        return <span><h2 style={{display: 'inline'}}>Word of the day</h2><br />
            <h2  style={{display:'inline'}}>Wort des Tages</h2>
            <h3 style={{color: 'red'}}>{daycontent.title}</h3>
            <p dangerouslySetInnerHTML={{__html: daycontent.text}}></p>
            <form>
            <button onClick={this.submit} >Read more</button>
            </form>
            <p></p>
            <button onClick={this.clickHandler}>Shut</button></span>;
    }
});

module.exports = DoorInside
