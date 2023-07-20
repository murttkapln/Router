import { useNavigate } from "react-router-dom";
import { data } from "../data";

const Person = () => {
  let navigate = useNavigate();
  return (
    <div className="row justify-content-center ">
      {data.map((item) => (
        <div className="col-12 p-3" key={item.id}>
          <img src={item.avatar} alt="" />
          <p>{item.first_name}</p>
          <button onClick={() => navigate(`${item.id}`, { state: item })}>
            Person {item.id}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Person;
