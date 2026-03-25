import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import type {SerializedError} from "@reduxjs/toolkit";

type ErrorPayload = {
    status_message?: string;
    message?: string;
    error?: string;
    success?: boolean;
};

const isFetchBaseQueryError = (
    error: FetchBaseQueryError | SerializedError | undefined,
): error is FetchBaseQueryError => {
    return !!error && typeof error === "object" && "status" in error;
};

const hasErrorField = (
    error: FetchBaseQueryError,
): error is FetchBaseQueryError & {error: string} => {
    return "error" in error && typeof error.error === "string";
};

export const getErrorMessage = (
    error: FetchBaseQueryError | SerializedError | undefined,
    fallbackMessage = "Something went wrong. Please try again.",
) => {
    if (!error) {
        return fallbackMessage;
    }

    if (isFetchBaseQueryError(error)) {
        if (hasErrorField(error) && error.error.trim()) {
            return error.error;
        }

        if (typeof error.data === "string" && error.data.trim()) {
            return error.data;
        }

        if (error.data && typeof error.data === "object") {
            const payload = error.data as ErrorPayload;

            if (typeof payload.status_message === "string" && payload.status_message.trim()) {
                return payload.status_message;
            }

            if (typeof payload.message === "string" && payload.message.trim()) {
                return payload.message;
            }

            if (typeof payload.error === "string" && payload.error.trim()) {
                return payload.error;
            }
        }

        if (typeof error.status === "number") {
            if (error.status >= 500) {
                return "Server error. Please try again later.";
            }

            if (error.status === 401) {
                return "Authorization failed. Check the API token.";
            }

            if (error.status === 404) {
                return "Requested data was not found.";
            }

            return `Request failed with status ${error.status}.`;
        }

        return "Network error. Check your connection and try again.";
    }

    if (typeof error.message === "string" && error.message.trim()) {
        return error.message;
    }

    return fallbackMessage;
};
