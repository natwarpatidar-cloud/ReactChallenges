/* Visit www.reactchallenges.live */

import { useState } from "react";
import ProgressBar from "./ProgressBar";

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  // const setValuer = () => "";
  const [val, setVal] = useState(10);

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={val} />
      
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" data-testid="width-input" onChange={(e) => {
            let val = e.target.value
            if(val >= 0 && val < 101) {
              setVal(val);
            }
          }} />
        </form>

      </div>
    </>
  );
}