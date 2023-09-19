import React from "react";
import "./style.scss";

class Modal extends React.Component {
  state = {
    togle: false,
  };

  handleClick = () => {
    this.setState({togle:!this.state.togle})
  } 

  handleClose = () => {
    this.setState({togle:false})
  } 


  render() {
    return (
      <div className="modal-main">
        <button onClick={this.handleClick} className="trigger">Click the modal!</button>
        {this.state.togle ? (
          <div class="modal">
            <div class="modal-content">
              <button onClick={this.handleClick} className="close-button">
                ×
              </button>
              <h1>Hello, I am a modal!</h1>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Modal;
