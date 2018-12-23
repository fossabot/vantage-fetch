/**
 * withFetch
 */

//Default fetch
withFetch(({ config }) => ({
  options: {
    endpoint: config.api.endpoints.random
  },
  hasOptions: true
}));

//fetch with name
withFetch(({ config }) => ({
  options: {
    name: "data",
    endpoint: config.api.endpoints.random
  },
  hasOptions: true
}));

//Local Fetch
withFetch(() => ({
  hasOptions: false,
  hasLocalFetch: true
}));
const res = await this.props.localFetch(endpoint);

//with props and local fetch
withFetch(({ config }) => ({
  options: {
    name: "datasources",
    endpoint: config.api.endpoints.datasources.list
  },
  hasLocalFetch: true,
  hasOptions: true
}));

//fetch with params
withFetch(({ config, dashboardId }) => ({
  options: {
    endpoint: config.api.endpoints.widgets.list(dashboardId)
  },
  hasOptions: true
}));

/**
 * withMutation
 */

//default post mutation
withMutation(({ config }) => ({
  options: {
    endpoint: config.api.endpoints.dashboards.create,
    method: "post"
  }
}));

//post mutation with name
withMutation(({ config, id }) => ({
  options: {
    name: "clone",
    endpoint: config.api.endpoints.dashboards.clone(id),
    method: "post" //put, delete
  }
}));

//with local mutation
withMutation(() => ({
  options: {
    name: "size",
    method: "put"
  },
  hasLocalMutation: true
}));
await localMutation(endpoint, { UIHeight, UIWidth });

/**
 * withPolling
 */
withPolling(({ refetch, config: { widgets } }) => ({
  options: {
    interval: widgets.DSActiveAlarmList.polling.interval,
    update: refetch,
    enable: widgets.DSActiveAlarmList.polling.enable
  }
}));
//componentWillUnmount() - Clears the polling time when a dashboard is closed
clearTimeout(this.props.timeoutPoll);


/**
 * withProps
 */
withProps({sample: 'Sample Prop'})(Component)
  
