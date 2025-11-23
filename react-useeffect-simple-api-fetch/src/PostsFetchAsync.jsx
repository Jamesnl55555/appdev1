import {useState, useEffect} from 'react';
export default function PostsFetchAsync(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }   
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }
    try {
        return (
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>Title</strong>: {post.title}
                        <br/>
                        <strong>Body</strong>: {post.body}
                        <p>===================================</p>
                    </li>
                ))}
            </ul>
        );
    } catch (error) {
        return <div>Error loading posts.</div>;
    }   
}