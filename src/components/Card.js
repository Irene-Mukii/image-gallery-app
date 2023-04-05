import { useMemo } from "react";
import { useNavigate , useLocation } from "react-router-dom"

export default function Card(props){
  const navigate = useNavigate();
  const handleOnClick = () =>{
    navigate(`/images/${props.id}`, {state: props.id })
  }

  const timeStamp = useMemo(()=>{
    const date = `${new Date (props.createdAt?.seconds*1000)}`.split(' ');
    return `${date[1]} ${date[2]} ${date[3]}`
  },[]);

  return (
    <div className='mb-5' onClick={handleOnClick}>
      <div className="card" style={{width: "18rem"}}>
          <div style={{
            height: '220px',
            backgroundImage: `url(${props.path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          </div>
          <h5 className="card-text text-center">{props.title}</h5>
          <div className="card-body d-flex justify-content-between">
            <p>{timeStamp}</p>
            <p>{`@${props.user}`}</p>
          </div>
      </div>
    </div>
  )
};