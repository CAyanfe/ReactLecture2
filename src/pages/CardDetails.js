import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardDetails from "../carddata.json";
import { useParams } from "react-router-dom";

export const CardLogic = () => {
  const { singlecard } = useParams();
  return (
    <section className="row">
      <h1>Book: {singlecard}</h1>
      {cardDetails.homecards.map((singleCard) => {
        //   console.log(singleCard);
        return (
          <div className="col-md-4" key={singleCard.id}>
            <CardDesign {...singleCard} />
            {/* {console.log(singleCard)} */}
          </div>
        );
      })}
    </section>
  );
};

const CardDesign = (props) => {
  const { img, Product, Price, desc, link } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{Product}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">{link}</Button>
      </Card.Body>
    </Card>
  );
};
