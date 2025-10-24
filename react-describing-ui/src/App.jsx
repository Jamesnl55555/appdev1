function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function App() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );


}

export default App
