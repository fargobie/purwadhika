var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input placeholder="Enter name" type="text" ref="name" />
        </div>
        <div>
          <textarea placeholder="Enter message" ref="message"></textarea>
        </div>
        <div>
          <button>Button</button>
        </div>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>

        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>

      </div>
    );
  }
});

// var firstName = 'Fargo';
// var paragraph = 'This is from a component';

ReactDOM.render(
  // <Greeter name={firstName} message={paragraph}/>,
  <Greeter />,
  document.getElementById('app')
);
