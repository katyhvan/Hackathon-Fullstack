import React from "react";
import "../../styles/Pay.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h2 className="h2-h2">Оrder Payment</h2>
        <div className="div-pay">
          <Box
            className="box-box"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              error
              id="outlined-error"
              label="Username"
              //   defaultValue="Hello World"
              className="inp"
              placeholder="Username"
              style={{ color: "#fff" }}
            />
            <br />
            <TextField
              error
              id="outlined-error"
              label="Card Name"
              //   defaultValue="Hello World"
              className="inp"
              placeholder="Card Name"
            />
            <br />
            <TextField
              error
              id="outlined-error"
              label=" Card Number"
              //   defaultValue="Hello World"
              className="inp"
              placeholder="Card Number"
            />
            <br />
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => navigate("/")}
              className="button-b"
              variant="outlined"
              color="error"
            >
              Pay
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Pay;
