import ComponentD from './ComponentD';
import { greetD } from './ComponentD'
export default function ComponentC() {
  return (
    <div>
      <h2>Component C</h2>
      <ComponentD />
    </div>
  );
}

export function greetC() {
  console.log('Hello from ModuleC');
  greetD();
}

