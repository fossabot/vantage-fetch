import React, { Component, Fragment } from "react";

import { withFetch, withConfig, compose } from "vantage-fetch";

class Search extends Component {
  state = {
    breed: [],
    breedId: ""
  };
  _handleSelect = e => {
    console.log(e.target.value);
    this.setState({ breedId: e.target.value });
  };
  _handleSearch = async () => {
    const endpoint = this.props.config.api.endpoints.search(this.state.breedId);
    const res = await this.props.localFetch(endpoint);
    console.log(res);
  };
  render() {
    const { data, refetch } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <ul className="nav">
          <li style={{ marginRight: "4px" }}>
            <select
              className="custom-select custom-select-lg mb-3"
              onChange={this._handleSelect}
            >
              <option defaultValue>Select a breed</option>

              {this.props.loading ? (
                <option>Loading</option> //#endregion
              ) : (
                data.map(res => {
                  return (
                    <option key={res.id} value={res.id}>
                      {res.name}
                    </option>
                  );
                })
              )}
            </select>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link active btn btn-primary"
              onClick={this._handleSearch}
            >
              Search
            </button>
          </li>
        </ul>
        <br />
        <br />

        {Object.keys(this.state.breed).length === 0 ? (
          <div>Please select a breed</div>
        ) : (
          <div key={2} className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{2}</h5>
              <p className="card-text">{2}</p>
            </div>
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
      endpoint: config.api.endpoints.list
    },
    hasOptions: true,
    hasLocalFetch: true
  }))
)(Search);
