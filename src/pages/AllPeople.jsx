import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import PeopleCard from "../Component/PeopleCard";
import { API_BASE_URL, PEOPLE } from "../utils/constants";

const AllStudent = () => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);

  const getUserData = async () => {
    setLoader(true);
    try {
      const params = {
        method: "get",
        url: `${API_BASE_URL}${PEOPLE}`,
      };
      await axios(params).then((response) => {
        setUser(response);
        setLoader(false);
      });
    } catch (err) {
      setLoader(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {loader ? (
        <h1>loading...</h1>
      ) : (
        <Container>
          <Row className="row">
            {user?.data?.map((currentData) => {
              return (
                <Col className="col-md-4" key={currentData.id}>
                  <PeopleCard {...currentData} />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default AllStudent;
