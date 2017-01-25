var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    console.log(message);

    if (name.length > 0 && message.length > 0) {
      this.refs.name.value = '';
      this.refs.message.value = '';
      this.props.onNewInput(name, message);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" /> <br />
        <textarea type="text" ref="message" /> <br />
        <button>Submit</button>
      </form>
    );
  }
});

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
  handleNewMessage: function(message) {
    this.setState({
      message: message
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewInput={this.handleNewInput} onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
