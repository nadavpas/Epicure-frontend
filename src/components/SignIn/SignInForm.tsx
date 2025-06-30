import { lineIcon } from "../../assets/Icons";
import "../../styles/SignInForm.scss";
import "../../App.scss";
const SignInForm: React.FC = () => {
  const RenderInputs = () => {
    return (
      <div className="input-container">
        <input type="email" placeholder="Email adress" />
        <input type="password" placeholder="Password" />
      </div>
    );
  };
  const RenderOr = () => {
    return (
      <div>
        <img src={lineIcon} alt="line" />
        <span>or</span>
        <img src={lineIcon} alt="line" />
      </div>
    );
  };
  return (
    <dialog open>
      <div className="signin-container">
        <form method="dialog">
          <button>Close</button>
          <div className="signin-headers">
            <span className="h1">SIGN IN</span>
            <span className="h4">To continue the order, please sign in</span>
          </div>
          {RenderInputs()}
          <button className="button-text">LOGIN</button>
          <button>Forget password?</button>
          {RenderOr()}
        </form>
        <button className="button-text">SIGN IN</button>
      </div>
    </dialog>
  );
};
export default SignInForm;
