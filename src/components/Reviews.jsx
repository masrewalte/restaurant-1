import React from "react";
import "./Reviews.css";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import Person1 from "../utils/img/person1.jpg";
import Person2 from "../utils/img/person2.jpg";
import Person3 from "../utils/img/person3.jpg";
import Person4 from "../utils/img/person4.jpg";

function Reviews() {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fs-1 fw-bold">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere porro assumenda enim molestias, temporibus at.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow"
              />
              <CardTitle className="text-success">John Mike</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, quia!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person2}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow"
              />
              <CardTitle className="text-success">Maria Cruz</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  eligendi omnis delectus voluptas. Ipsum maiores accusamus
                  ducimus cumque tempora. Eveniet!
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person3}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow"
              />
              <CardTitle className="text-success">Anna Gold</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  cum fuga nobis vitae ex incidunt neque praesentium porro
                  reiciendis, ipsa suscipit est. Eveniet, quidem optio?
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person4}
                alt=""
                className="img-fluid rounded-circle mx-3 shadow"
              />
              <CardTitle className="text-success">Nick Burn</CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
