import * as React from "react";
import { Row, Button } from "antd";
import SectionComponent from "./SectionComponent";
import { createUseStyles } from "react-jss";
import answerKey from "shared/assets/key-scripts/practice-test-1.json";
import { AnswerKey } from "app/models/AnswerSheetModel";

const useStyles = createUseStyles({
  root: {
    width: "100%",
  },
});

const AnswerSheetComponent: React.FC = (props) => {
  const classes = useStyles();
  const [answerResults, setAnswerResults] = React.useState<AnswerKey>(answerKey);
  const [hasSubmitted, setHasSubmitted] = React.useState<boolean>(false);

  const onChange = (data: string, sectionIndex: number, questionIndex: number) => {
    let temp = { ...answerResults };

    if (!temp.sections[sectionIndex].results) {
      temp.sections[sectionIndex].results = Array.from(
        { length: temp.sections[sectionIndex].items.split("").length },
        () => false
      );
    }

    //@ts-ignore
    temp.sections[sectionIndex].results[questionIndex] =
      data === temp.sections[sectionIndex].items[questionIndex];

    setAnswerResults(temp);
  };

  const handleSubmit = () => {
    setHasSubmitted(true);
  };

  return (
    <Row className={classes.root} justify='space-between'>
      {answerResults.sections.map((section, sectionIndex) => (
        <SectionComponent
          key={sectionIndex}
          section={section}
          hasSubmitted={hasSubmitted}
          onChange={(data, questionIndex) => onChange(data, sectionIndex, questionIndex)}
        />
      ))}
      <Button type='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </Row>
  );
};

export default AnswerSheetComponent;
