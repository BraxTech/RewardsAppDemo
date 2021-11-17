import React, { useState } from "react";
import RewardList from "../RewardsList/reward-list.component";
import {
  MDBIcon,
  MDBCard,
  MDBListGroupItem,
  MDBCardTitle,
  MDBBtn,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
const RenderCard = ({ data }) => {
  const [pointsEarned, setPointsEarned] = useState(0);
  const [moneySpent, setMoneySpent] = useState(0);
  return (
    <>
      <MDBRow>
        {data.map((customers) => (
          <MDBCol md="4" style={{ padding: "5%" }}>
            <MDBCard
              key={customers.id}
              className="card"
              style={{
                backgroundImage:
                  "url(`https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong style={{  color: "blue", textAlign:'center'}}>
                      {customers.name}
                    </strong>
                  </MDBCardTitle>
                
                  <MDBBtn style={{ backgroundColor: "#EAA221" }}>
                    <MDBIcon icon="money-bill" /> View Rewards
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
            <div style={{ backgroundColor: "gray", marginTop: ".2%" }}>
              <MDBBtn style={{ height: "3em" }}>Show January</MDBBtn>
            </div>

            {customers.purchases[0].January.map((info) => {
              return (
                <>
                  <RewardList
                    productName={info.itemName}
                    productPrice={info.itemPrice}
                  ></RewardList>
                </>
              );
            })}

            <MDBListGroupItem>
              <p> January Total Spent: {moneySpent}</p>
              <p> January Total Points:{pointsEarned} </p>
            </MDBListGroupItem>
            <div style={{ backgroundColor: "gray", marginTop: "4%" }}>
              <MDBBtn style={{ height: "4em" }}>Show February</MDBBtn>
            </div>
            {customers.purchases[1].February.map((info) => {
              return (
                <>
                  <RewardList
                    productName={info.itemName}
                    productPrice={info.itemPrice}
                  ></RewardList>
                </>
              );
            })}
            <MDBListGroupItem>
              <p>February Total Spent:{moneySpent}</p>
              <p>Fenriary Total Points:{pointsEarned}</p>
            </MDBListGroupItem>

            <div style={{ backgroundColor: "gray", marginTop: "4%" }}>
              <MDBBtn style={{ height: "4em" }}>Show March</MDBBtn>
            </div>
            {customers.purchases[2].March.map((info) => {
              return (
                <>
                  <RewardList
                    productName={info.itemName}
                    productPrice={info.itemPrice}
                  ></RewardList>
                </>
              );
            })}
            <MDBListGroupItem>
              <p>March Total Spent:{moneySpent}</p>
              <p>March Total Points:{pointsEarned}</p>
            </MDBListGroupItem>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
};
export default RenderCard;
