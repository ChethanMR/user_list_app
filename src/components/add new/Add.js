import React, { useState } from "react";
import "./Add.css";
import { useSelector, useDispatch } from "react-redux";
import { addPerson } from "../../feature/people/peopleSlice";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const list = useSelector((state) => state.people);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // console.log(list);
  const [person, setPerson] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    let new_user = { ...person, [name]: value };
    setPerson(new_user);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(person);
    let newPerson = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: person.name,
      email: person.email,
    };
    dispatch(addPerson(newPerson));
    setPerson({ name: "", email: "" });
    navigate("/");
    // console.log(newPerson);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");

    // console.log(e.target.value);
  };
  return (
    <div className="add_form">
      <form>
        <h3>Add new Person</h3>

        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={person.name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInputChange}
            value={person.email}
          />
        </label>
        <div className="btn_container">
          <button className="save_btn" onClick={handleAdd}>
            Save
          </button>
          <button className="cancel_btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
