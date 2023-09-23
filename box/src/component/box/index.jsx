import "./style.scss";

function Box({backgroundColor, closeButon, index}) {

  const setKey = () => {
    return closeButon(index)}


  return (
    <div className="created-boxes">
      <div className="box" style={{backgroundColor:backgroundColor}}>
        <button onClick={setKey} className="close-box">X</button>
      </div>
    </div>
  );
}

export default Box;
