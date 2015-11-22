class HelloMessage extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

HelloMessage.propTypes = {
  name: React.PropTypes.string
};
