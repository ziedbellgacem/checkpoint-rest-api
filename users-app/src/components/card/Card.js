import {
  deleteUser,
  getOneUser,
  toggleTrue,
} from "../../redux/actions/usersActions";
import "./Card.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deletUser = () => {
    if (window.confirm("are you sure ")) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div>
      <table>
        <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>
            <button
              className="btn1"
              onClick={() => {
                dispatch(getOneUser(user._id));
                dispatch(toggleTrue());
                navigate("/AddEdit");
              }}
            >
              <i class="fa fa-user-edit"></i>
            </button>
            <button className="btn2" onClick={() => deletUser()}>
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Card;
