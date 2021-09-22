import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function PreLoader() {
    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setDone(true);
                });
        }, 5000);
    }, []);

    return (
        <>
            {!done ? (
                <ReactLoading type={"bars"} color={"#03fc4e"} height="100%" />
            ) : (
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
}
