import s from "./RequestFeedback.module.css";

type Props = {
    message: string;
    variant?: "default" | "error";
};

const RequestFeedback = ({message, variant = "default"}: Props) => {
    return (
        <div className={`${s.message} ${variant === "error" ? s.error : ""}`}>
            <p>{message}</p>
        </div>
    );
};

export default RequestFeedback;
