var React = require('react'),
    App = React.createFactory(require('./components/app'))

var data = window.APP_DATA || {},
    useHistory = data.history;

delete data.history;


React.render(
    App({history: useHistory }),
    document.getElementById('app')
);
