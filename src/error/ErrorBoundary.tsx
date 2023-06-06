import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallbackComponent?: ReactNode | string;
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
    console.log('에러 바운더리에서 에러 발생 여부 판별됨 ');
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      this.props.fallbackCallback?.(this.state.error);

      return this.props.fallbackComponent ?? this.props.children;
    }

    return this.props.children;
  }
}
