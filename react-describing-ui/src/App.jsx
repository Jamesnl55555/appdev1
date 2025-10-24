import { people } from "./utilities/Data";
import { Utils } from "./utilities/Utils";

function App() {
   const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={Utils(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );

}

export default App
