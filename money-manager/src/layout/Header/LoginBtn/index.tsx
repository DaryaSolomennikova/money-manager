import "./style.css";

interface LoginBtnProps {
  onClick: () => void;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ onClick }) => {
  return (
    <div className="login">
      <button className="login-btn" onClick={onClick}>
        Log in
      </button>
    </div>
  );
};

export default LoginBtn;
