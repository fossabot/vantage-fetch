import React, { Component, Fragment } from "react";

import { withFetch, withConfig, compose } from "vantage-fetch";

class Breeds extends Component {
  render() {
    const { data, refetch } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <ul className="nav">
          <li className="nav-item">
            <button
              type="button"
              className="nav-link active btn btn-secondary"
              onClick={() => refetch()}
            >
              Refresh
            </button>
          </li>
        </ul>
        <br />
        <br />

        {this.props.loading ? (
          <div>Loading</div>
        ) : (
          <div className="card-columns">
            {data.map(res => {
              return (
                <div key={res.id} className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={res.url}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{res.breeds[0].name}</h5>
                    <p className="card-text">{res.breeds[0].description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Fragment>
    );
  }
}

export default compose(
  withConfig,
  withFetch(({ config }) => ({
    options: {
      endpoint: config.api.endpoints.breeds
    },
    hasOptions: true
  }))
)(Breeds);
