import "./placeinfo.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
//import Chart from "../../../components/chart/Chart";


const Placeinfo = () => {
  return (
    <div className="placeinfo">
      <Sidebar />
      <div className="placeinfoContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Редактировать</div>
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
           
            <h1 className="title">Описание</h1>
            <div className="item">
              
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">История:</span>
                  <span className="itemValue">Первые поселения на территории Московского Кремля относятся к бронзовому веку (II тысячелетие до н. э.).</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Архитектура:</span>
                  <span className="itemValue">Существующие стены и башни были построены в 1485—1516 годах. </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Разное:</span>
                  <span className="itemValue">
                  Московский Кремль — самая крупная сохранившаяся и действующая до наших дней крепость на территории Европы.
                  </span>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Placeinfo;
