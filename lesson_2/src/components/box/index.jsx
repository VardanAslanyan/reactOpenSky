import React from "react";
import "./style.scss";

class Box extends React.Component {
  render() {
    return (
      <div
        className="box-content"
        style={{ backgroundColor: this.props.bgColor }}
      >
        <i className={`${this.props.icon} my-icons`} />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

class AllBox extends React.Component {
  state = {
    boxList: [
      {
        bgColor: "#E4A600",
        title: "Unlimited Color Variants",
        icon: "icon-icon-equalizer",
      },
      {
        bgColor: "#00B5A6",
        title: "Many Reusable Elements",
        icon: "icon-icon-layers",
      },
      {
        bgColor: "#005881",
        title: "Responsive Layoute",
        icon: "icon-icon-diamond",
      },
      {
        bgColor: "#C81010",
        title: "Clean Modern Code",
        icon: "icon-icon-share",
      },
    ],
  };

  render() {
    return (
      <div className={"box-list"}>
        {this.state.boxList.map((item, index) => {
          return (
            <Box
              key={index}
              title={item.title.toLocaleUpperCase()}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    );
  }
}

export default AllBox;
