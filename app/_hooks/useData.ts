import { useEffect, useState } from "react";
import { Quiz } from "../(routes)/dashboard/FlashCard";

const useData =  (endpoint: string) => {
    const [data, setData] = useState<Quiz[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);

        fetch(endpoint, { signal })
            .then((res) => {
                // Check if the response status is in the 200 range (success status)
                if (res.ok) {
                    // res.json stills gives us a promise, so we need to chain another then()
                    return res.json();
                } else {
                    // Reject the promise with the status code
                    throw new Error(`HTTP error, Status: ${res.status}`);
                }
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((error) => {
                const message = "There was an error fetching data: " + error;
                setError(message);
            });
        }, [])
        
        return {data, error, isLoading};
}

export default useData;