import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else return <div></div>;
}

function RenderComments({ comments }) {
  if (comments != null) {
    const comment = comments.map(comments => {
      return (
        <div key={comments.id}>
          <li key={comments.id}>
            <p>{comments.comment}</p>
            <p>
              --{comments.author},{" "}
              {new Intl.DateTimeFormat("en-us", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comments.date)))}
            </p>
          </li>
        </div>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{comment}</ul>
      </div>
    );
  } else return <div></div>;
}

const DishDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
