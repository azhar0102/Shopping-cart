import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import store from "./components/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
