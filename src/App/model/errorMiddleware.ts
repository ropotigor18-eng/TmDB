import {isRejectedWithValue, type Middleware} from "@reduxjs/toolkit";
import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import type {SerializedError} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {getErrorMessage} from "../../common/utils/getErrorMessage.ts";

const notifiedRequests = new Set<string>();

const getRequestId = (action: {meta?: {requestId?: string}}) => action.meta?.requestId;

export const errorMiddleware: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const requestId = getRequestId(action);
        const payload = action.payload as FetchBaseQueryError | SerializedError | undefined;

        if (!requestId || !notifiedRequests.has(requestId)) {
            if (requestId) {
                notifiedRequests.add(requestId);
            }

            toast.error(getErrorMessage(payload, "Request failed. Please try again."));
        }
    }

    return next(action);
};
