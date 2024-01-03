import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import store from "./components/Store";
import { Provider } from "react-redux";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
