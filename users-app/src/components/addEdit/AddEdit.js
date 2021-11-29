import "./AddEdit.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, editUser } from "../../redux/actions/usersActions";
import { useNavigate } from "react-router-dom";
function AddEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEdit = useSelector((state) => state.userReducer.user);
  const edit = useSelector((state) => state.userReducer.edit);
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: 0,
  });
  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    edit
      ? setUser({
          username: userEdit.username,
          email: userEdit.email,
          age: userEdit.age,
        })
      : setUser({
          username: "",
          email: "",
          age: 0,
        });
  }, [userEdit, edit]);
  return (
    <div className="wrapper">
      <form className="form">
        <div className="pageTitle title">Add User </div>
        <div className="secondaryTitle title">
          Please fill this form to AddNewUser .
        </div>
        <input
          type="text"
          name="username"
          value={user.username}
          className="name formEntry"
          placeholder="Name"
          onChange={handelChange}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          className="email formEntry"
          placeholder="Email"
          onChange={handelChange}
        />
        <input
          type="number"
          name="age"
          value={user.age}
          className="name formEntry"
          placeholder="Age"
          onChange={handelChange}
        />

        {edit ? (
          <button
            className="submit"
            onClick={() => {
              dispatch(editUser(userEdit._id, user));
              navigate("/ListUsers");
            }}
          >
            edit
          </button>
        ) : (
          <button
            className="submit"
            onClick={() => {
              dispatch(addNewUser(user));
              navigate("/ListUsers");
            }}
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
}
export default AddEdit;
