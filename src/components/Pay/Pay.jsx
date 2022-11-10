// import React from "react";
// import "../../styles/Pay.css";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

// const Pay = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="container">
//         <h2 className="h2-h2">Оrder Payment</h2>
//         <div className="div-pay">
//           <Box
//             className="box-box"
//             component="form"
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "45ch" },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//               error
//               id="outlined-error"
//               label="Username"
//               //   defaultValue="Hello World"
//               className="inp"
//               placeholder="Username"
//               style={{ color: "#fff" }}
//             />
//             <br />
//             <TextField
//               error
//               id="outlined-error"
//               label="Card Name"
//               //   defaultValue="Hello World"
//               className="inp"
//               placeholder="Card Name"
//             />
//             <br />
//             <TextField
//               error
//               id="outlined-error"
//               label=" Card Number"
//               //   defaultValue="Hello World"
//               className="inp"
//               placeholder="Card Number"
//             />
//             <br />
//           </Box>
//           <Stack direction="row" spacing={2}>
//             <Button
//               onClick={() => navigate("/")}
//               className="button-b"
//               variant="outlined"
//               color="error"
//             >
//               Pay
//             </Button>
//           </Stack>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pay;
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";

import "../../styles/Pay.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          className="card-pay"
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="inputs-pay">
          <input
            className="inp-pay"
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="inp-pay"
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="inp-pay"
            type="text"
            name="expiry"
            placeholder="Valid Thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="inp-pay"
            type="text"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <button className="pay-btn">PAY</button>
        </form>
      </div>
    );
  }
}
