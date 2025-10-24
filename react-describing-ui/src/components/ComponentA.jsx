import ComponentB from './ComponentB'


export default function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

export function greetA() {
  console.log('Hello from ModuleA');
}
