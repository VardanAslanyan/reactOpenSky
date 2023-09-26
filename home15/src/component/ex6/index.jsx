// import { useState } from "react";
import "./style.scss";

function Ex6({arrString}) {

    // const [min, setMin] = useState(Number)
    // const [max, setMax] = useState(Number)
    // const [product, setProduct] = useState(Number)


    const parseToArr = (arrString) => {
        const arr = arrString
        const innerMin = Math.min(...arr);
        const innerMax = Math.max(...arr);

        return {
            minimum: innerMin,
            maximum: innerMax,
            product: innerMin * innerMax
        }
    }

    const dict = parseToArr(arrString)

  return (
    <div className="ex-6">
        <ul>
            <li className="max">Maximum {dict.maximum}</li>
            <li className="min">Minimum {dict.minimum}</li>
            <li className="product">Product {dict.product}</li>
        </ul>
    </div>
  );
}

export default Ex6;
