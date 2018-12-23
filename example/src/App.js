import React, { Component } from "react";

import { withFetch, withConfig, compose } from "vantage-fetch";

class App extends Component {
  render() {
    console.log(this.props);
    if (this.props.loading) {
      return <div>Loading</div>;
    }
    const { data, refetch } = this.props;
    return (
      <div>
        <img style={{ width: "400px" }} src={data.message} />
        <br />
        <button onClick={refetch}>Random</button>
      </div>
    );
  }
}

export default compose(
  withConfig,
  withFetch(({ config }) => ({
    options: {
      endpoint: config.api.endpoints.random
    },
    hasOptions: true
  }))
)(App);
