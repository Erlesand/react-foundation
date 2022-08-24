import CardList from "./CardList";
import "./style.css";

// ...

const items = [
  {
    title: "first item",
    image: "https://via.placeholder.com/350x150",
  },
  {
    // comment out the title property to generate an error while rendering a Card component.
    title: "second item",
    image: "https://via.placeholder.com/350x150",
  },
];

// ...

export const App = () => {
  return <CardList items={items} />;
};
