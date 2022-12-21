import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_BASE_URL, PEOPLE } from "../utils/constants";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const AddStudent = () => {
  const [loader, setLoader] = useState(false);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [_itemID, setItemID] = useState("");
  const [mode, setMode] = useState("add");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setzipcode] = useState("");

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  function resetFormFields() {
    setItemID("");
    setfName("");
    setlName("");
    setEmail("");
    setPhone("");
    setStreet("");
    setCity("");
    setzipcode("");
  }

  const initializeEdit = async () => {
    const itemId = location.pathname.split("/")[2];
    setLoader(true);
    try {
      const params = {
        method: "get",
        url: `${API_BASE_URL}${PEOPLE}/${itemId}`,
      };
      await axios(params).then((res) => {
        const { id, name, email, phone, address } = res.data;
        setItemID(id);
        setfName(name.firstname);
        setlName(name.lastname);
        setEmail(email);
        setPhone(phone);
        setStreet(address?.street);
        setCity(address?.city);
        setzipcode(address?.zipcode);
        setLoader(false);
      });
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (pathname === "editPeople") {
      setMode("edit");
      initializeEdit();
    } else {
      setMode("add");
      resetFormFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  async function onSave() {
    setLoader(true);
    const obj = {
      name: { firstname: fname, lastname: lname },
      email: email,
      phone: phone,
      address: {
        street,
        city,
        zipcode,
      },
      city: city,
    };

    // console.log("obj :", obj);
    let endpoint = `${API_BASE_URL}${PEOPLE}`;
    let method = "POST";
    if (mode === "edit") {
      endpoint = `${API_BASE_URL}${PEOPLE}/${_itemID}`;
      method = "PATCH";
    }
    try {
      await axios(endpoint, { method, data: obj }).then((res) => {
        if (mode === "edit") {
          window.alert("data updated succesfully");
          initializeEdit();
          setLoader(false);
        } else {
          window.alert("data added succesfully");
          resetFormFields();
          setLoader(false);
        }
      });
    } catch (err) {
      window.alert("Error: ", err);
      setLoader(false);
    }
  }
  return (
    <div>
      <div className="container">
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>{mode === "edit" ? `Update` : `Add`} People</h1>
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
              >
                <Form.Control
                  type="first name"
                  placeholder="first name"
                  value={fname}
                  onChange={(e) => setfName(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control
                  type="last name"
                  placeholder="last name"
                  value={lname}
                  onChange={(e) => setlName(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Phone"
                className="mb-3"
              >
                <Form.Control
                  type="phone"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Street"
                className="mb-3"
              >
                <Form.Control
                  type="street"
                  placeholder="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Zipcode"
                className="mb-3"
              >
                <Form.Control
                  type="zipcode"
                  placeholder="zipcode"
                  value={zipcode}
                  onChange={(e) => setzipcode(e.target.value)}
                />
              </FloatingLabel>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onSave}
              >
                {mode === "edit" ? `Update` : `Add`} People
              </button>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default AddStudent;
