import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import RewardList from "../RewardList/reward-list.component";
const CustomerCard = () => {
  const [data, setData] = useState([]);
  const [showRewards, setShowRewards] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    axios
      .get("data2.json")
      .then((res) => {
        setData(res.data);
        // console.log(data[0].transactions[2].prices)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClick = () => {
    setShowRewards(!showRewards);
  };

  return (
    <>
      <MDBBtn
        href="#"
        onClick={onClick}
        style={{ maxWidth: "30vw", margin: "1%" }}
      >
        View Rewards
      </MDBBtn>
      <MDBRow>
        {data.map((customers, index) => (
          <MDBCol style={{ maxWidth: "22rem", padding: "2%" }}>
            <MDBCard style={{ backgroundColor: "darkGray" }} key={index}>
              <MDBCardImage
                className="img-fluid"
                src="https://www.creativegroupinc.com/wp-content/uploads/2020/01/Reward-Blog.png"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>{customers.name}</MDBCardTitle>
                {/* <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText> */}
              </MDBCardBody>
            </MDBCard>

            {showRewards ? (
              <RewardList transactions={customers.transactions} index={index} />
            ) : null}
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
};

export default CustomerCard;
