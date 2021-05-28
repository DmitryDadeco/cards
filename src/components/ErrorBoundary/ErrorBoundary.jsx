import { Component } from 'react';
import { logger } from '../../logger';

export class ErrorBoundary extends Component {
  state = { isError: false }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error, info) {
    logger.add(info.componentStack);
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;

    return isError ? <div>Oops. Error</div> : children;
  }
}
