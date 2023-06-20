import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackComponent: React.JSXElementConstructor<{
    error: Error;
    fallbackCallback: (error?: Error) => void;
  }>;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error !== null) {
      if (this.props.fallbackComponent)
        return (
          <this.props.fallbackComponent
            error={this.state.error}
            fallbackCallback={() => this.setState({ error: null })}
          />
        );
    }

    return this.props.children;
  }
}
