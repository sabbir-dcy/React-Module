import { useNavigate } from "react-router-dom";

const Friend = ({ friend: { name, username, id } }) => {
  const navigate = useNavigate();
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h2>name: {name}</h2>
      <button onClick={showFriendDetail}>{username}</button>
    </div>
  );
};
export default Friend;
