import React from "react";
import "./style.scss";

class Address extends React.Component {
  render() {
    return (
      <div className="address" style={{ marginLeft: this.props.margin }}>
        <input type="text" placeholder={this.props.placeholder} />
        <i className={`${this.props.icon} my-icons`} />
      </div>
    );
  }
}

class AddressData extends React.Component {
  state = {
    addressData: [
      {
        placeholder: "Enter area",
        margin: "0px",
      },
      {
        placeholder: "Enter city",
        margin: "30px",
      },
      {
        placeholder: "Enter state",
        margin: "0px",
      },
      {
        placeholder: "Post code",
        margin: "30px",
      },
    ],
  };

  render() {
    return (
      <div className="address-input">
        <label className="address-label">Address Detalies</label>
        <div className={"address-list"}>
          {this.state.addressData.map((item, index) => {
            return (
              <Address
                key={index}
                label={item.label}
                placeholder={item.placeholder}
                margin={item.margin}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default AddressData;
