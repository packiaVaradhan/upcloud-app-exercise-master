import React from 'react';

interface IClientOnlyProps {
  onServer?: React.ReactNode;
}

interface IClientOnlyState {
  doRender: boolean;
}

/**
 * Renders children only on client (browser), skipping server-side rendering.
 */
class ClientOnly extends React.Component<
  IClientOnlyProps,
  IClientOnlyState
> {
  constructor(props: IClientOnlyProps) {
    super(props);

    this.state = {
      doRender: false,
    };
  }

  componentDidMount() {
    // this method is called on client only
    this.setState({ doRender: true });
  }

  render() {
    const { children, onServer = null } = this.props;
    const { doRender } = this.state;

    return doRender ? children : onServer;
  }
}

export default ClientOnly;
