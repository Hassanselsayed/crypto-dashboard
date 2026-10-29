import NavItem from "../../components/NavItem/NavItem";
import "./LeftPane.scss";
import logo from "../../assets/logo.svg";

import { FaMoneyBill, FaRegStar } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function LeftPane() {
  return (
    <div className="left-pane">
      <div className="left-pane__top">
        <img className="left-pane__logo" src={logo} alt="logo" />
        <NavItem
          className="left-pane__nav-item"
          icon={FaMoneyBill}
          title="Assets"
          isActive={true}
        />
        <NavItem
          className="left-pane__nav-item"
          icon={FaRegStar}
          title="Watchlist"
          isActive={false}
        />
      </div>

      <div className="left-pane__bottom">
        <NavItem
          className="left-pane__nav-item"
          icon={FaGear}
          title="Settings"
          isActive={false}
        />
      </div>
    </div>
  );
}
