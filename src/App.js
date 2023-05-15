import AllWayLogin from "./AllWayLogin";
import FbLogin from "./FbLogin";
import LoginByfacebook from "./LoginByfacebook";
import MyGoogleLogin from "./MyGoogleLogin";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "yellow", height: "800px" }}>
        <LoginByfacebook />
        <AllWayLogin />
        {/* <MyGoogleLogin /> */}
        <FbLogin />
      </div>
    </>
  );
}

export default App;
