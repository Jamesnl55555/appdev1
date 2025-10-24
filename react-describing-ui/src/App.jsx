import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import { greetA } from "./components/ComponentA";
import { greetB } from "./components/ComponentB";
import { greetC } from "./components/ComponentC";
function App() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();

  return(
  <div>
    <h1>Root Component</h1>
    <ComponentA />
    <ComponentC />
  </div>

  );
}

export default App
