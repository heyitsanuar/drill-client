import * as React from "react";
import { Col } from "antd";
import QuestionComponent from "./QuestionComponent";
import { SectionView } from "app/models/AnswerSheetModel";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  heading: {
    display: "flex",
  },
  score: {
    marginLeft: 20,
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
      <div className={classes.heading}>
        <h4>{title}</h4>
        {hasSubmitted && (
          <span className={classes.score}>
            {section.results?.filter(Boolean).length || 0} out of {answers.length}
          </span>
        )}
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
    </Col>
  );
};

export default SectionComponent;
