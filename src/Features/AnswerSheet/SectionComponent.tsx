import * as React from "react";
import { Col } from "antd";
import QuestionComponent from "./QuestionComponent";
import { SectionView } from "app/models/AnswerSheetModel";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    textAlign: "center",
  },
});

const SectionComponent: React.FC<SectionView> = (props) => {
  const classes = useStyles();
  const { section, hasSubmitted, onChange } = props;
  const { items, results } = section;
  const [answers] = React.useState(items.split(""));

  //const totalScore =

  return (
    <Col span={8}>
      <div className={classes.root}>
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
