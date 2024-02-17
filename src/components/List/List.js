import React from "react";
import "./List.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePerson } from "../../feature/people/peopleSlice";

const List = () => {
  const peopleList = useSelector((state) => state.people);
  const dispatch = useDispatch();
  //   console.log(peopleList);
  const handleEdit = (id) => {
    // console.log(id);
  };
  return (
    <>
      <h2>People List - Redux</h2>

      <div className="list_container">
        <div className="add_container">
          <Link to="/add">
            <button>Add +</button>
          </Link>
        </div>
        <div className="table_base">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((person) => {
                // console.log(person);
                return (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>
                      <div className="action_btns">
                        <Link to={`edit/${person.id}`}>
                          <button
                            className="edit_btn"
                            onClick={() => handleEdit(person.id)}
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          className="delete_btn"
                          onClick={() =>
                            dispatch(deletePerson({ id: person.id }))
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
