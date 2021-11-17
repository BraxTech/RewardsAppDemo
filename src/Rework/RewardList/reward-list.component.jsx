import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdb-react-ui-kit";

const RewardList = ({ transactions, index }) => {
  // const {transactions}= transactions
  const [totals, setTotals] = useState([]);
  const [showCard, setShowcard] = useState(false);
  const [points, setPoints] = useState([])
  const reducer = (accumulator, curr) => accumulator + curr;
  return transactions.map((transaction, index) => {
    return (
      <MDBListGroup style={{ width: "100%", marginBottom: "3%" }} key={index}>
        <MDBListGroupItem>{transaction.month}</MDBListGroupItem>
        {transaction.prices.map((price, index) => {
          return (
            <MDBListGroupItem style={{ color: "green" }}>
              Transaction: ${price}
            </MDBListGroupItem>
          );
        })}

        <MDBListGroupItem>
          Total Spent: ${transaction.prices.reduce(reducer)}
        </MDBListGroupItem>
        {totals.push(transaction.prices.reduce(reducer))}
        {
        totals.map((totalPrice)=>{
         let doublePoints= 0
         let singlePoints= 0
         let totalPoints = 0
         if(totalPrice > 100){
        doublePoints =  (totalPrice - 100) * 2
        singlePoints = totalPrice - (totalPrice - 100)
        totalPoints = singlePoints + doublePoints
        }else{
        totalPoints = totalPrice - 50
        }
        })}

      </MDBListGroup>
    );
  });
};

export default RewardList;
