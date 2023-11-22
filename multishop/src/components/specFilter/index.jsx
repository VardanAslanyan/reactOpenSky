import "./style.scss";

function SpecFilter({filterBy, quantity}) {
  return (
    <div className="spec-filter">
      <div className="choose">
        <input type="checkbox"/>
        <span>{filterBy}</span>
      </div>
      <span>{quantity}</span>
    </div>
  );
}

export default SpecFilter;
