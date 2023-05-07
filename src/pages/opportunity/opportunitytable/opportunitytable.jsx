import "./opportunitytable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userColumns,opportunityRows } from "../opportunitysource/sourceopportunity";

const OpportunityTable = () => {
  const [data, setData] = useState(opportunityRows);

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
            <Link to="/opportunity/opportunityinfo" style={{ textDecoration: "none" }}>
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
    <div className="OpportunityTable">
      <div className="OpportunityTableTitle">
      Заявки
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default OpportunityTable;
