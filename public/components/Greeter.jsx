var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'bro',
      message: 'Greetings from your friendly React.js component!'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewInput: function(name, message) {
    this.setState({
      name: name,
      message: message
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewInput={this.handleNewInput} />
      </div>
    );
  }
});

module.exports = Greeter;
