import _ from 'lodash';

const { REACT_APP_SERVER_GRAPHQL, REACT_APP_EIA_API_KEY } = process.env;

const config = {
  api: {
    url: REACT_APP_SERVER_GRAPHQL,
  },
  eiaApiKey: REACT_APP_EIA_API_KEY,
};

export default config;
