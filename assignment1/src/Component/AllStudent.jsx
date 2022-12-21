import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllStudent = () => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const getUserData = async () => {
    setLoader(true);
    const response = await fetch(
      "https://backendapinodejsraju.herokuapp.com/api/allstudent"
    );
    setUser(await response.json());
    setLoader(false);
  };
  useEffect(() => {
    getUserData();
  }, [refresh]);

  const onRemove = (itemId) => {
    axios
      .delete(`https://backendapinodejsraju.herokuapp.com/api/delete/${itemId}`)
      .then((res) => {
        setRefresh(!refresh);
      });
  };
  return (
    <>
      {loader ? (
        <h1>loading...</h1>
      ) : (
        <div className="container">
          <div className="row">
            {user?.data?.map((CurrentData) => {
              return (
                <div className="col-md-4" key={CurrentData._id}>
                  <div className="card cardd">
                    Name: {CurrentData.name}
                    <div className="card-body">
                      <h5 className="card-title">Email: {CurrentData.email}</h5>
                      <p className="card-text">Phone: {CurrentData.phone}</p>
                      <p className="card-text">
                        Address : {CurrentData.address}
                      </p>
                      <p className="card-text">City : {CurrentData.city}</p>
                      <p className="card-text">Class : {CurrentData.class}</p>

                      <Link
                        className="btn btn-primary m-3"
                        to={`/editStudent/${CurrentData._id}`}
                      >
                        Edit Student
                      </Link>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => onRemove(CurrentData._id)}
                      >
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AllStudent;
