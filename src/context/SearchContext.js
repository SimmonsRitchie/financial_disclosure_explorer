import { useState } from "react";
import createUseContext from "constate"

// Step 1: Create a custom hook that contains your state and actions
function useSearch() {
  const [text, setText] = useState("");
  // const updateText = (e) => setText("hi")
  return { text, setText };
}

// Step 2: Declare your context state object to share the state with other components
export const useSearchContext = createUseContext(useSearch);