import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePerson } from "../../feature/people/peopleSlice";

const Update = () => {
  const list = useSelector((state) => state.people);
  const { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  //   console.log(id);
  let selectedPerson = list.filter((person) => person.id == id);
  //   console.log(selectedPerson);

  let user = selectedPerson[0];
  //   console.log(user);

  //   const [person, setPerson] = useState({
  //     name: user.name,
  //     email: user.email,
  //   });
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updatePerson({
        id: id,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };
  return (
    <div className="add_form">
      <form>
        <h3>Update Details</h3>

        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className="btn_container">
          <button className="save_btn" onClick={handleUpdate}>
            Update
          </button>
          <button className="cancel_btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
