import React, { useContext, useEffect } from "react";
import { shopContext } from "../../contesxts/ShopContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Modalka from "../Modalka/Modalka";

import "../../styles/Shop.css";
import { TextField } from "@mui/material";

const Shop = () => {
  let { shop, getShop, changeCourseCount, parseShop, deleteCoursesInShop } =
    useContext(shopContext);

  useEffect(() => {
    getShop();
    parseShop();
  }, []);

  useEffect(() => {
    getShop();
    parseShop();
  }, [shop]);

  function shopCleaner() {
    localStorage.removeItem("shop");
    getShop();
  }

  return (
    <>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="shop-img" align="left">
              Image
            </TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shop?.courses.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="shop-img" component="th" scope="row">
                <img
                  src={row.item.image}
                  alt="poster"
                  width="100px"
                  height="70px"
                />
              </TableCell>
              <TableCell align="right">{row.item.title}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
                <TextField
                  className="shop-inp"
                  align="right"
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeCourseCount(e.target.value, row.item.id)
                  }
                />
              </TableCell>
              <TableCell>
                <DeleteSweepIcon
                  className="delete-shop"
                  onClick={() => deleteCoursesInShop(row.item.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="total-price">
        Total price: <span className="summary">{shop?.totalPrice}</span>
        <Modalka onClick={() => shopCleaner()} />
      </div>
    </>
  );
};

export default Shop;
