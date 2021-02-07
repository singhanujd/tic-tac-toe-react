import "./App.css";
import classes from "./App.module.css";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className={classes.BoardContainer}>
      <Layout />
    </div>
  );
}

export default App;
