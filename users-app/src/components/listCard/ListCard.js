import Card from "../card/Card";
import "./ListCard.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFalse, getAllUsers } from "../../redux/actions/usersActions";
import { useEffect } from "react";
function ListUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className="list">
      <Link to="/">
        {" "}
        <button class="btn4">
          Home
          <i class="fa fa-home"></i>
        </button>
      </Link>
      <button
        class="btn3"
        onClick={() => {
          dispatch(toggleFalse());
          navigate("/AddEdit");
        }}
      >
        <i class="fas fa-user-plus"></i>Add New User
      </button>
      <table>
        <tr>
          <th>UserName</th>
          <th>@Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </table>
      {users.map((user) => (
        <Card key={user._id} user={user} />
      ))}
    </div>
  );
}
export default ListUsers;
