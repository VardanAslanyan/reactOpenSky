import "./style.scss";

function Service({icon, data}) {
  return <div className="service">
    {icon? <span className={icon}/>: null}
    {data?<p>{data}</p>: null}
  </div>;
}


export default Service