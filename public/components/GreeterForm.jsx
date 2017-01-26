var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

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

module.exports = GreeterForm;
