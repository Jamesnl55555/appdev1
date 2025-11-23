import UsersFetch from "./UsersFetch";
import PostsFetchAsync from "./PostsFetchAsync";
import TodosFetchAxios from "./TodosFetchAxios";

export default function App() {
  return (
    <>
      <h1>Users List</h1>
      <UsersFetch />

      <h1>Posts Data</h1>
      <PostsFetchAsync />

      <h1>Title and Status</h1>
      <TodosFetchAxios />
    </>
  );
}