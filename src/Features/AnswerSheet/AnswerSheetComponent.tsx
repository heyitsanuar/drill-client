import * as React from "react";
import { Row, Button, Input, Col } from "antd";
import SectionComponent from "./SectionComponent";
import { AnswerKey } from "app/models/AnswerSheetModel";
import { createUseStyles } from "react-jss";
import { tests } from "shared/assets/key-scripts/dictionary";
import { isNull } from "util";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    padding: "40px 0px",
  },
  sections: {
    width: "100%",
    padding: "20px 0px",
  },
  searchForm: {},
  buttons: {
    marginLeft: 10,
  },
});

const AnswerSheetComponent: React.FC = (props) => {
  const classes = useStyles();
  const [answerKey, setAnswerKey] = React.useState<string>("A4N7F7W");
  //@ts-ignore
  const [answerResults, setAnswerResults] = React.useState<AnswerKey>(tests[answerKey]);
  const [hasSubmitted, setHasSubmitted] = React.useState<boolean>(false);

  const handleReset = () => {
    //@ts-ignore
    setAnswerResults(tests[answerKey]);
    setHasSubmitted(false);
  };

  React.useEffect(handleReset, [answerKey]);

  const canSubmit = () => {
    let isReady = true;

    for (let section of answerResults.sections) {
      if (!section.results || section.results?.some(isNull)) {
        isReady = false;
        break;
      }
    }

    return isReady;
  };

  const handleOnChange = (data: string, sectionIndex: number, questionIndex: number) => {
    let temp = { ...answerResults };

    if (!temp.sections[sectionIndex].results) {
      temp.sections[sectionIndex].results = Array.from(
        { length: temp.sections[sectionIndex].items.split("").length },
        () => null as any
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

  const handleSelectTest = (value: any) => {
    //@ts-ignore
    if (tests[value]) {
      setAnswerKey(value);
    }
  };

  return (
    <div className={classes.root}>
      <Row justify='end'>
        <Col span={4}>
          <Input.Search placeholder='Enter Test ID' enterButton onSearch={handleSelectTest} />
        </Col>
      </Row>
      <Row className={classes.sections} justify='space-between'>
        {answerResults.sections.map((section, sectionIndex) => (
          <SectionComponent
            key={sectionIndex}
            section={section}
            hasSubmitted={hasSubmitted}
            onChange={(data, questionIndex) => handleOnChange(data, sectionIndex, questionIndex)}
          />
        ))}
      </Row>
      <Row justify='end'>
        <Col span={4}>
          <Button className={classes.buttons} onClick={() => setAnswerKey(answerKey)}>
            Reset
          </Button>
          <Button
            className={classes.buttons}
            type='primary'
            onClick={handleSubmit}
            //disabled={!canSubmit()}
          >
            Check answers
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AnswerSheetComponent;
