var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'bro',
      message: 'Greetings from your friendly React.js component!'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;

    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    } else { alert('Please enter a valid name!'); }


  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
