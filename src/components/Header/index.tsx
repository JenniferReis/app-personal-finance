import { CustomHeader } from "./styles";
import img from "../../assets/images/senfinancasLogo.png"

function Header() {
  return (
    <CustomHeader>
      <div className="box">
        <img src={img} className="logo" alt="senfinanças" ></img>
      </div>
    </CustomHeader>
  );
}

export default Header;
