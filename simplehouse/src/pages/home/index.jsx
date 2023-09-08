import "./style.scss";
import React from "react";
import Item from "../../components/itmes";
import Home1 from "../../assets/img/home01.jpg";
import Home2 from "../../assets/img/home02.jpg";
import Home3 from "../../assets/img/home03.jpg";
import Home4 from "../../assets/img/home04.jpg";
import Home5 from "../../assets/img/home05.jpg";
import Home6 from "../../assets/img/home06.jpg";
import Home7 from "../../assets/img/home07.jpg";
import Home8 from "../../assets/img/home08.jpg";
import HomeUnder from "../../assets/img/homeunder.jpg";
import { NavLink, Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    itmesHome: [
      {
        picture: Home1,
        h4Data: "Fusce dictum finibus",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$45 / $55",
      },
      {
        picture: Home2,
        h4Data: "Aliquam sagittis",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$65 / $70",
      },
      {
        picture: Home3,
        h4Data: "Sed varius turpis",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$30.50",
      },
      {
        picture: Home4,
        h4Data: "Aliquam sagittis",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$25.50",
      },
      {
        picture: Home5,
        h4Data: "Maecenas eget justo",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$80.25",
      },
      {
        picture: Home6,
        h4Data: "Quisque et felis eros",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$20 / $40 / $60",
      },
      {
        picture: Home7,
        h4Data: "Sed ultricies dui",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$94",
      },
      {
        picture: Home8,
        h4Data: "Donec porta consequat",
        pItem:
          "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        price: "$15",
      },
    ],
  };

  render() {
    return (
      <div className="homeMain">
        <div className="home">
          {this.state.itmesHome.map((items, index) => {
            return (
              <Item
                key={index}
                h4Data={items.h4Data}
                pItem={items.pItem}
                picture={items.picture}
                price={items.price}
              ></Item>
            );
          })}
        </div>
        <div className="underHome">
          <div className="home-under-left">
            <img className="under-image" src={HomeUnder} alt="" />
          </div>
          <div className="home-under-right">
            <h4 >Maecenas nulla neque</h4>
            <p className="pUnder">
              Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
              Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas interdum porttitor imperdiet. Integer
              facilisis.
            </p>
            <button className="home-button">Read More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
