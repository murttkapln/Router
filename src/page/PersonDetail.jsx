import { Link, useLocation, useNavigate, useParams } from "react-router-dom"


const PersonDetail = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    const {personId} = useParams()
    
  return (
    <div className="row">
        <p>PersonDetail </p>
        <div className="col">
            <p>{personId}</p>
            <img src={state.avatar} alt="" />
            <p>{state.first_name}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
            {/* <Link to={-1}>Go Back</Link> */}
        </div>

    </div>
  )
}

export default PersonDetail