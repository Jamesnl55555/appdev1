import {useState, useEffect} from 'react';

export default function UsersFetch(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            }   );
    }, []);
    
    if (loading) {
        return <div>Loading users...</div>;
    }

    try {
        return (
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        );
    } catch (error) {
        return <div>Error loading users.</div>;
    }
}