import "./style.scss";
import React from "react";
import Item from "../../components/itmes";
import Person1 from "../../assets/img/about-01.jpg";
import Person2 from "../../assets/img/about-02.jpg";
import Person3 from "../../assets/img/about-03.jpg";
import Person4 from "../../assets/img/about-04.jpg";
import "../../assets/icon/style.css"
import ReadMore from "../../components/readmore";

class About extends React.Component {
  state = {
    itmesHome: [
      {
        picture: Person1,
        h4Data: "Jennifer Soft",
        title: "Founder and CEO",
        pItem:
          "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
      },
      {
        picture: Person2,
        h4Data: "Daisy Walker",
        title: "Executive Chef",
        pItem:
          "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
      },
      {
        picture: Person3,
        h4Data: "Florence Nelson",
        title: "Kitchen Manager",
        pItem:
          "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
      },
      {
        picture: Person4,
        h4Data: "Valentina Martin",
        title: "Culinary Director",
        pItem:
          "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
      },
    ],
    readMore: [
        {
            icon: "icon-analytics",
            pData: "Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.",
            backgroundColor: "#2D99CC"
        },
        {
            icon: "icon-icon-layers",
            pData: "Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.",
            backgroundColor: "#319966"
        },
        {
            icon: "icon-icon-equalizer",
            pData: "Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.",
            backgroundColor: "#993332"
        }
    ]
  };

  render() {
    return (
      <div className="homeMain">
        <div className="about">
          {this.state.itmesHome.map((items, index) => {
            return (
              <Item
                classNameID="person"
                key={index}
                h4Data={items.h4Data}
                title={items.title}
                pItem={items.pItem}
                picture={items.picture}
              ></Item>
            );
          })}
        </div>
        <div className="read-more-items">
            {this.state.readMore.map((items, index) => {
                return (
                    <ReadMore
                    key={index}
                    icon={items.icon}
                    pData={items.pData}
                    backgroundColor={items.backgroundColor}
                    />
                )
            })}
        </div>
      </div>
    );
  }
}

export default About;
