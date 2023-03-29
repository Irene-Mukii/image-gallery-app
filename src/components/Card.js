export default function Card(props){
    return (
      <div className='col mb-5'>
        <div className="card" style={{width: "18rem"}}>
            <img src={props.path} className="card-img-top" alt={props.title}/>
            <div className="card-body">
              <p className="card-text">{props.title}</p>
            </div>
        </div>
      </div>
    )
}