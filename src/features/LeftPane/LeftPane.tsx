import NavItem from "../../components/NavItem";
import "./LeftPane.css";

import { FaMoneyBill } from "react-icons/fa";

export default function LeftPane() {
  return (
    <div className="left-pane">
      <NavItem icon={FaMoneyBill} title="Assets" isActive={true} />
    </div>
  );
}
