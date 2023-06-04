import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const loginStatus = useSelector(state=> state.auth.isLogin);
  return (
    <>
      <Header />
      {!loginStatus && <Auth />}
      {loginStatus && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
