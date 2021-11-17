import React from "react";
import { MDBListGroupItem } from "mdb-react-ui-kit";

const RewardsList = ({ productName, productPrice, ashley }) => {
  return (
    <MDBListGroupItem>
      <p> Purchase:{productName}</p>
      <p>Price:${productPrice}</p>
    </MDBListGroupItem>
  );
};
export default RewardsList;
