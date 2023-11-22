import "./style.scss"


function Product({backgroundImage, title, data, className, stars, id}) {
    return(
        <div className={className}>
            {backgroundImage? <span style={{backgroundImage: `url('${backgroundImage}')`}}/>: null}
            <div className="data">
            {title? <h6>{title}</h6>: null}
            {data? <p>{data}</p>: null}
            {stars? 'star': null}
            </div>
        </div>
    )
}


export default Product