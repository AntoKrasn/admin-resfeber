import "./opportunityinfo.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";


const Opportunityinfo = () => {
  return (
    <div className="opportunityinfo">
      <Sidebar />
      <div className="opportunityinfoContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Информация</h1>
            <div className="item">
              <img
                src="https://avatars.dzeninfra.ru/get-zen_doc/8170504/pub_64195f3b3d1e83632eea5021_641960f06348b973b9782247/scale_1200"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Московский Кремль</h1>
                <div className="detailItem">
                  <span className="itemKey">Тип:</span>
                  <span className="itemValue">Достопримечательность</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Город:</span>
                  <span className="itemValue">Москва</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Адрес:</span>
                  <span className="itemValue">
                    Манежная 2-10
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Растояние от центра:</span>
                  <span className="itemValue">1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
           
            <h1 className="title">Заявитель</h1>
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
      </div>
    </div>
  );
};

export default Opportunityinfo;