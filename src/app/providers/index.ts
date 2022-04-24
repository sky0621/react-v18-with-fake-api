import { compose } from 'redux';
import withRouter from "./with-router";

const withProviders = compose(withRouter);

export default withProviders;
