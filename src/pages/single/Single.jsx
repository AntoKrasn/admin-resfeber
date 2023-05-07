import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../home/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Редактировать</div>
            <h1 className="title">Информация</h1>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1683130461600-7ce41d9c27cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Алексей Быков</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">bykov@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Телефон:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Адрес:</span>
                  <span className="itemValue">
                    г.Ижевск ул.Ворошилова д.1
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Страна:</span>
                  <span className="itemValue">Россия</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Обзор пользователя за 6 месяцев" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Последние операции</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
