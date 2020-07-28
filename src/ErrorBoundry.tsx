import React from "react";

interface ErrorBoundaryPropsWithFallback {
    onResetKeysChange?: (
        prevResetKeys: Array<any>,
        resetKeys: Array<any>
    ) => void;
    onReset?: () => void;
    onError?: (error: Error, componentStack: string) => void;
    resetKeys?: Array<any>;
    fallback: React.ReactElement<any, any> | null;
}

type ErrorBoundaryProps = ErrorBoundaryPropsWithFallback;

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error: any) {
        return {
            hasError: true,
            error,
        };
    }
    render() {
        if (this.state.hasError) {
            return (this.props as any).fallback;
        }
        return this.props.children;
    }
}
