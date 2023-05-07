import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AdminPanel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Главная</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Главная панель</span>
            </li>
          </Link>
          <p className="title">Список</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Пользователи</span>
            </li>
          </Link>
          <Link to="/excursion" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Экскурсии</span>
            </li>
          </Link>
          <Link to="/opportunity" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Заявки</span>
            </li>
          </Link>
          <Link to="/places" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Туристические места</span>
            </li>
          </Link>
          <p className="title">Полезное</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Статистика</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Уведомления</span>
          </li>
          <p className="title">Сервис</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Состояние системы</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Журнал</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Настройки</span>
          </li>
          <p className="title">Пользователь</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Профиль</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Выход</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
