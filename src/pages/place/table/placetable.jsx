import "./placetable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { placeColumns,placeRows } from "../sourcetable/placesource";

const Placetable = () => {
  const [data, setData] = useState(placeRows);

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
            <Link to="/places/placeinfo" style={{ textDecoration: "none" }}>
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
    <div className="Placetable">
      <div className="PlacetableTitle">
        Добавить Новое Место
        <Link to="/places/newplace" className="link">
          Добавить
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={placeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Placetable;
