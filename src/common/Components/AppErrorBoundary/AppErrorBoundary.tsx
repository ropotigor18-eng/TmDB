import {Component, type ErrorInfo, type ReactNode} from "react";
import {toast} from "react-toastify";
import RequestFeedback from "../RequestFeedback/RequestFeedback.tsx";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

class AppErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError() {
        return {hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Unhandled render error", error, errorInfo);
        toast.error("Unexpected application error. Reload the page and try again.");
    }

    public render() {
        if (this.state.hasError) {
            return <RequestFeedback message="The application crashed while rendering this page." variant="error"/>;
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;
