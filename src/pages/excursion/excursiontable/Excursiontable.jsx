import "./excursiontable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { excursionColumns,excursionRows } from "../sourceexcursion/excursionsource";

const Excursiontable = () => {
  const [data, setData] = useState(excursionRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Действия",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/excursion/excursioninfo" style={{ textDecoration: "none" }}>
              <div className="viewButton">Просмотр</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Удалить
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="Excursiontable">
      <div className="ExcursiontableTitle">
        Добавить Новую Экскурсию
        <Link to="/excursion/newexcursion" className="link">
          Добавить
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={excursionColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Excursiontable;
