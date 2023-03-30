import { useMemo } from "react";

export default function Card(props){
  const timeStamp = useMemo(()=>{
    const date = `${new Date (props.createdAt.seconds*1000)}`.split(' ');
    return `${date[1]} ${date[2]} ${date[3]}`
  },[]);

  return (
    <div className='col mb-5'>
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
            <p>@username</p>
          </div>
      </div>
    </div>
  )
};