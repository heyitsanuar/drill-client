import * as React from "react";
import { Col } from "antd";
import QuestionComponent from "./QuestionComponent";
import { SectionView } from "app/models/AnswerSheetModel";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    textAlign: "center",
  },
  heading: {
    textAlign: "center",
    margin: "10px 0px",
  },
  score: {
    marginLeft: 20,
    "&.invisible": {
      visibility: "hidden",
    },
  },
});

const SectionComponent: React.FC<SectionView> = (props) => {
  const classes = useStyles();
  const { section, hasSubmitted, onChange } = props;
  const { title, items, results } = section;
  const [answers] = React.useState(items.split(""));

  //const totalScore =

  return (
    <Col span={8}>
      <div className={classes.root}>
        <div className={classes.heading}>
          <h4>{title}</h4>
          <span className={`${classes.score} ${!hasSubmitted ? "invisible" : null}`}>
            {section.results?.filter(Boolean).length || 0} out of {answers.length}
          </span>
        </div>
        {answers.map((answer, questionIndex) => (
          <QuestionComponent
            key={questionIndex}
            number={questionIndex}
            isCorrect={results ? results[questionIndex] : false}
            hasSubmitted={hasSubmitted}
            onChange={(e) => {
              //@ts-ignore
              onChange(e.target.value, questionIndex);
            }}
          />
        ))}
      </div>
    </Col>
  );
};

export default SectionComponent;
