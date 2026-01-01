import { Component, type ErrorInfo } from "react";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center py-24 text-center">
          <div>
            <h1 className=" font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground">
              Please refresh the page or try again later
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
