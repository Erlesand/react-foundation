import Card from "./Card";

const CardList = ({ items }) => {
  return items.map((item, index) => {
    return <Card key={index} {...item} />;
  });
};

export default CardList;
