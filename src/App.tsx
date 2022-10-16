import { createBritishSuccessionTree } from "./families/britain";
import { buildQueueList } from "./utils/build-list";
import { isDescendant } from "./utils/is-descendant";
import { useState } from "react";

const britishList: string[] = buildQueueList(createBritishSuccessionTree());

function App(): JSX.Element {
  const [ancestor, setAncestor] = useState("Queen Elizabeth II");
  const [descendant, setDescendant] = useState("Queen Elizabeth II");
  console.log(ancestor);
  console.log(descendant);

  return (
    <>
      <label htmlFor="ancestor">Ancestor:</label>
      <select
        id="ancestor"
        name="ancestor"
        onChange={(e) => setAncestor(e.target.value)}
      >
        {britishList.map((royal, i) => (
          <option key={i} value={royal}>
            {royal}
          </option>
        ))}
      </select>
      <label htmlFor="descendant">Descendant:</label>
      <select
        id="descendant"
        name="descendant"
        onChange={(e) => setDescendant(e.target.value)}
      >
        {britishList.map((royal, i) => (
          <option key={i} value={royal}>
            {royal}
          </option>
        ))}
      </select>
      {isDescendant(descendant, ancestor, createBritishSuccessionTree()) ? (
        <p>true</p>
      ) : (
        <p>false</p>
      )}
    </>
  );
}

export default App;
