import React from "react";

const DisplayDate = ({ _timestamp }) => {
    const [timestamp, setTimestamp] = React.useState(_timestamp ?? null);

    React.useEffect(() => {
        if (timestamp !== null) {
            const date = new Date(timestamp);
            const userTimezone =
                Intl.DateTimeFormat().resolvedOptions().timeZone;
            const formattedDate = date.toLocaleString("en-US", {
                timeZone: userTimezone,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });
            setTimestamp(formattedDate);
        }
    }, []);

    return timestamp;
};

export default DisplayDate;
