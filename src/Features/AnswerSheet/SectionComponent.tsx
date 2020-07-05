import * as React from "react";
import { Col } from "antd";
import QuestionComponent from "./QuestionComponent";
import { SectionView } from "app/models/AnswerSheetModel";

const SectionComponent: React.FC<SectionView> = (props) => {
  const { section, hasSubmitted, onChange } = props;
  const { title, items, results } = section;
  const [answers] = React.useState(items.split(""));

  return (
    <Col span={8}>
      <h4>{title}</h4>
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
