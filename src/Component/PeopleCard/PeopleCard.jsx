import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ id, name, email, username, phone, address }) => {
  return (
    <div className="card" style={{ marginTop: 5 }}>
      <div className="card-body">
        <h5 className="card-title">
          <Link className="btn btn-primary m-3" to={`/editPeople/${id}`}>
            {name?.firstname} {name?.lastname}
          </Link>
        </h5>
        <h5 className="card-text">Email: {email}</h5>
        <p className="card-text">Username: {username}</p>
        <p className="card-text">Phone: {phone}</p>

        <p className="card-text">
          Address : {address?.street}, {address?.city}, {address?.zipcode}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
