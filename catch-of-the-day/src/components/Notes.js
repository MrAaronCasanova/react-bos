import React from 'react';

class Anything extends React.Component {
  // render() is the only method required of a react componenet
  render() {
    return (
      <React.Fragment>
        {/* React.Fragment is ignored and useful for place adjacent sibling components */}
        <h1>Hello World</h1>
        <h3>I'm a monster!!</h3>
      </React.Fragment>
    );
  }
}

export default Anything;
