import UsersFetch from "./UsersFetch";
import PostsFetchAsync from "./PostsFetchAsync";
export default function App() {
  return (
    <>
      <h1>Users List</h1>
      <UsersFetch />

      <h1>Posts Data</h1>
      <PostsFetchAsync />
    </>
  );
}