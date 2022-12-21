import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [_itemID, setItemID] = useState("");
  const [mode, setMode] = useState("add");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [classes, setClasses] = useState("");

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  function resetFormFields() {
    setItemID("");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setClasses("");
  }

  const initializeEdit = async () => {
    const itemId = location.pathname.split("/")[2];
    await axios
      .get(`https://backendapinodejsraju.herokuapp.com/api/edit/${itemId}`)
      .then((res) => {
        const { _id, name, email, phone, address, city } = res.data;
        setItemID(_id);
        setName(name);
        setEmail(email);
        setPhone(phone);
        setAddress(address);
        setCity(city);
        setClasses(res.data.class);
      });
  };

  useEffect(() => {
    if (pathname === "editStudent") {
      setMode("edit");
      initializeEdit();
    } else {
      setMode("add");
      resetFormFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  async function onSave() {
    const obj = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      class: classes,
    };

    // console.log("obj :", obj);
    let endpoint = `https://backendapinodejsraju.herokuapp.com/api/student`;
    let method = "POST";
    if (mode === "edit") {
      endpoint = `https://backendapinodejsraju.herokuapp.com/api/update/${_itemID}`;
      method = "PATCH";
    }
    try {
      await axios(endpoint, { method, data: obj }).then((res) => {
        if (mode === "edit") {
          window.alert("data updated succesfully");
          initializeEdit();
        } else {
          window.alert("data added succesfully");
          resetFormFields();
        }
      });
    } catch (err) {
      window.alert("Error: ", err);
    }
  }
  return (
    <div>
      <div className="container">
        <h1>{mode === "edit" ? `Update` : `Add`} User</h1>
        <form>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              value={name}
              class="form-control"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              class="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">PhoneNo</label>
            <input
              type="text"
              value={phone}
              class="form-control"
              placeholder="Enter Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Address</label>
            <input
              type="text"
              value={address}
              class="form-control"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">City</label>
            <input
              type="text"
              value={city}
              class="form-control"
              placeholder="Enter City"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">class</label>
            <input
              type="text"
              value={classes}
              class="form-control"
              placeholder="Enter class"
              onChange={(e) => setClasses(e.target.value)}
            />
          </div>

          <button type="button" class="btn btn-primary" onClick={onSave}>
            {mode === "edit" ? `Update` : `Add`} User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
