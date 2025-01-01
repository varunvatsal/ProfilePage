import React from "react";
import data from "../Projects.json";
import { Card, Button } from "react-bootstrap";
import style from "../css/productList.module.css";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  console.log(data);
  let { projects } = data;
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className={style.container}>
        {projects.map((ele) => {
          return (
            <div key={ele.id}>
              <Card border="primary">
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>{ele.shortDesc}</Card.Text>
                  <Button
                    onClick={() => {
                      navigate(`/description/${ele.id}`);
                    }}
                    variant="outline-primary"
                  >
                    Detailed Description
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    href={ele.website}
                    target="_blank"
                  >
                    visit website
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ProjectList;
