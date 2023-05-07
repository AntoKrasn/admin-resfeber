import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      product: "Государственный Эрмитаж",
      img: "https://lh3.googleusercontent.com/p/AF1QipPAeVlKXllx09TNj5ZuWKNL_dVT9_r6p_ZB7z0=s680-w680-h510",
      customer: "Алексей Быков",
      date: "1 Июня",
      method: "Онлайн оплата",
      status: "Оплачено",
    },
    {
      id: 2,
      product: "Государственный Эрмитаж",
      img: "https://lh3.googleusercontent.com/p/AF1QipPAeVlKXllx09TNj5ZuWKNL_dVT9_r6p_ZB7z0=s680-w680-h510",
      customer: "Андрей Романов",
      date: "1 Июня",
      method: "Онлайн оплата",
      status: "Ожидается",
    },
    {
      id: 3,
      product: "Зимний дворец",
      img: "https://lh3.googleusercontent.com/p/AF1QipMM7fOUrsMgKBeGrsXyVLUDCBZlIwnOsRhX7c93=s680-w680-h510",
      customer: "Василий Петров",
      date: "12 Июня",
      method: "Оплата после",
      status: "Не оплачено",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Экскурсия</TableCell>
            <TableCell className="tableCell">Пользователь</TableCell>
            <TableCell className="tableCell">Дата</TableCell>
            <TableCell className="tableCell">Метод оплаты</TableCell>
            <TableCell className="tableCell">Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
