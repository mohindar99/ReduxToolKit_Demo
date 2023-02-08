import { useSelector,useDispatch } from "react-redux";
import "./Display.css";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  //console.log(data);

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }
    
  return (
    <>
      {data.map((user, id) => {
        return (
          <div>
                <li className="allign" key={id}> {user}</li>
                <button onClick={()=>deleteUser(id)}><MdDeleteForever/></button>
          </div>
        );
      })}
    </>
  );
};

export default DisplayUsers;
