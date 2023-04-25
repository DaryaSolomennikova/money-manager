import img from '../../../logo-money-manage.png';
import "./style.css"

const Logo: React.FC = () => {
    return (
      <img className="logo" src={img} alt="logo" />
    );
}

export default Logo;