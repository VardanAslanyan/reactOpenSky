import './style.scss'




function OfferComponent({backgroundImage, save, so, className}) {
    return(
        <div className={className} style={{backgroundImage: `url('${backgroundImage}')`}}>
            {save?<p>{save}</p>: null}
            {so?<h3>{so}</h3>: null}
            <button>Shop Now</button>
        </div>
    )
}


export default OfferComponent