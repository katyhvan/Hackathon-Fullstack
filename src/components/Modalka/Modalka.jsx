import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../styles/modalka.css";

import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modalka = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div>
      <Button className="shop-btn" onClick={handleOpen}>
        BUY NOW
      </Button>
      <Modal
        className="modal-order"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalka-box" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Service Order</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <input type="text" placeholder="Username" /> <br /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <TextField
                className="modalka-text1"
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
              <br />
              <TextField
                className="modalka-text1"
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <br />
              <TextField
                className="modalka-text1"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <br />
            </div>
            <input className="modalka-text" type="checkbox" /> I confirm <br />
            <Button
              className="modalka-button"
              variant="contained"
              color="success"
              style={{ width: "200px" }}
              onClick={() => navigate("/pay")}
            >
              Order
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Modalka;
