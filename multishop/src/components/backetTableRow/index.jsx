import "./style.scss";
import Quantity from '../quantity'

function BacketTableRow({backgroundImage, price, total, value, title}) {
  return <div className="backet-table-row">
    <div className="backet-picture-main">
        <div className="backet-product-picture" style={{backgroundImage: `url('${backgroundImage}')`}}></div>
        <div>{title}</div>
    </div>
    <div>{price}</div>
    <div><Quantity value={value}/></div>
    <div>{total}</div>
    <button>X</button>
  </div>;
}

export default BacketTableRow