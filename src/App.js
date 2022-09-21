import "./styles.css";
import React, { useState } from "react";

var foodMenu = {
  BreakFast: [
    {
      Dish: "Poha",
      Image: "./img/poha.jpg",
      Description:
        "Poha is flattened rice that is steam cooked with onions, spices and herbs."
    },
    {
      Dish: "Kachori",
      Image: "/img/kachori.jpg",
      Description:
        "Kachori is a deep-fried, crisp, and flaky Indian snack stuffed with a delicious vegetarian filling."
    }
  ],
  Lunch: [
    {
      Dish: "Butter chicken",
      Image: "./img/bchic.jpg",
      Description:
        "Butter chicken also known as Chicken Makhani is a classic Indian dish where grilled chicken (Tandoori chicken) is simmered in a spicy, aromatic, buttery and creamy tomato gravy."
    },
    {
      Dish: "Naan",
      Image: "./img/naan.jpg",
      Description:
        " Naan is a leavened flatbread made in some countries in Asia. These breads are baked in a tandoor (a cylindrical oven made of clay)."
    }
  ],
  Dinner: [
    {
      Dish: "Burger",
      Image: "./img/burger.jpg",
      Description:
        "Burger is a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun."
    },
    {
      Dish: "Fries",
      Image: "./img/fries.jpg",
      Description:
        "Fries is a side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips."
    }
  ]
};

var foodMenuData = Object.keys(foodMenu);
export default function App() {
  var [menu, setMenu] = useState(foodMenu["BreakFast"]);
  function clickHandler(food) {
    setMenu(foodMenu[food]);
  }

  return (
    <>
      {" "}
      <div className="App">
        <nav className="navigation">
          <div className="nav-head">
            <h1>Sanket Kakade</h1>
          </div>
          <ul className="list-non-bullet nav-pills">
            <li className="list-item-inline">
              <a className="link" href="https://sk1stwebsite.netlify.app/">
                Home
              </a>
            </li>
            <li className="list-item-inline">
              <a
                className="link link-active"
                href="https://sk1stwebsite.netlify.app/projects.html"
              >
                Projects
              </a>
            </li>
            <li className="list-item-inline">
              <a
                className="link"
                href="https://sk1stwebsite.netlify.app/blogs.html"
              >
                Blogs
              </a>
            </li>
          </ul>
        </nav>
        <h1>Food recommendation App</h1>
        <div>
          {foodMenuData.map((food) => {
            return (
              <button
                className="btn-click"
                onClick={() => {
                  clickHandler(food);
                }}
              >
                {food}{" "}
              </button>
            );
          })}
        </div>
        <div>
          {menu.map((food) => {
            return (
              <div className="box">
                <h2>Dish:</h2>{" "}
                <span
                  style={{
                    color: "rgb(73, 12, 97)",
                    textShadow: "2px 2px 2px grey"
                  }}
                >
                  <h3>{food.Dish}</h3>
                </span>
                <img className="images" src={food.Image} alt="" />
                <h3>Description:</h3>
                {food.Description} <hr />
              </div>
            );
          })}
        </div>

        <footer className="footer">
          <div className="footer-header">
            <h3>My socials</h3>
          </div>
          <ul className="social-links list-non-bullet">
            <li className="list-item-inline">
              <a className="link" href="https://twitter.com/Sanket24Kakade">
                Twitter
              </a>
            </li>
            <li className="list-item-inline">
              <a
                className="link"
                href="https://www.linkedin.com/in/sanket-kakade"
              >
                LinkedIn
              </a>{" "}
            </li>
            <li className="list-item-inline">
              <a className="link" href="https://github.com/Sanket-Kakade-0240">
                Github
              </a>{" "}
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
