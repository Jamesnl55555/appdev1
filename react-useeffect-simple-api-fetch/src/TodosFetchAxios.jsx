import { useState, useEffect } from "react";
import axios from 'axios';


export default function TodosFetchAxios(){
    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState();

    useEffect(()=>{
        const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setData(response.data);
        } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      };
    }
      fetchData();
    },[]); 

    if (loading) {
        return <div>Loading posts...</div>;
    }
    try {
        return (
            <ul>
                {Data.map((data) => (
                    <li key={data.id}>
                        <strong>Title</strong>: {data.title}
                        <br/>
                        <strong>Completed</strong>: {data.completed ? "True" : "False" }
                        <p>===================================</p>
                    </li>
                ))}
            </ul>
        );
    } catch (error) {
        return <div>Error loading Data.</div>;
    } 

}