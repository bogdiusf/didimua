import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import ContextProvider from "./components/context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Homepage />
    </ContextProvider>
  );
}

export default App;
