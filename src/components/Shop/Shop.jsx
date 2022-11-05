import React, { useContext, useEffect } from "react";
import { shopContext } from "../../contesxts/ShopContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/joy";
import { Button } from "@mui/material";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const Shop = () => {
  const { shop, getShop, changeCourseCount } = useContext(shopContext);

  useEffect(() => {
    getShop();
  }, []);

  function shopCleaner() {
    localStorage.removeItem("shop");
    getShop();
  }

  // console.log(shop);
  // console.log(shop.totalPrice);

  return (
    <>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shop?.courses.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.image} alt="poster" />
              </TableCell>
              <TableCell align="right">{row.item.title}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell
                type="number"
                align="right"
                value={row.count}
                onChange={(e) => changeCourseCount(e.target.value)}
              ></TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">DELETE</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
        Total price: {shop?.totalPrice}
        <Button>BUY NOW</Button>
      </Typography>
    </>
  );
};

export default Shop;
