import { compose } from 'redux';
import { withRouter } from './with-router';

// eslint-disable-next-line import/prefer-default-export
export const withProviders = compose(withRouter);
