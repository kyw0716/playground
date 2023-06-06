import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode | string;
  fallbackCallback?: (error: Error | null) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  //   componentDidCatch(error: Error, info: ErrorInfo) {
  //     // Example "componentStack":
  //     //   in ComponentThatThrows (created by App)
  //     //   in ErrorBoundary (created by App)
  //     //   in div (created by App)
  //     //   in App
  //   }

  render() {
    if (this.state.hasError) {
      this.props.fallbackCallback?.(this.state.error);

      return this.props.fallback;
    }

    return this.props.children;
  }
}
