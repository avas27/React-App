import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
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
  renderComments(dish) {
    if (dish != null) {
      const comment = dish.comments.map(comments => {
        return (
          <div>
            <li key={dish.comments.id}>
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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
