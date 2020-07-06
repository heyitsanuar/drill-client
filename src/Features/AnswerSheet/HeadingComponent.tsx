import * as React from "react";
import { Col } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  heading: {
    textAlign: "center",
    marginBottom: 10,
  },
  score: {
    marginLeft: 20,
    "&.invisible": {
      visibility: "hidden",
    },
  },
});

const HeadingComponent: React.FC<any> = (props) => {
  const classes = useStyles();
  const { title, items, results } = props.section;
  const [answers] = React.useState(items.split(""));

  return (
    <Col span={8}>
      <div className={classes.heading}>
        <h4>{title}</h4>
        <span className={`${classes.score} ${!props.hasSubmitted ? "invisible" : null}`}>
          {results?.filter(Boolean).length || 0} out of {answers.length}
        </span>
      </div>
    </Col>
  );
};

export default HeadingComponent;
