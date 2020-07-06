import * as React from "react";
import { Row, Button, Input, Col, Card } from "antd";
import SectionComponent from "./SectionComponent";
import SummaryComponent from "features/Timeline/SummaryComponent";
import { AnswerKey } from "app/models/AnswerSheetModel";
import { createUseStyles } from "react-jss";
import { tests } from "shared/assets/key-scripts/dictionary";
import scoresJson from "shared/assets/key-scripts/score-chart.json";
import { isNull } from "util";
//@ts-ignore
import { v4 as uuid } from "uuid";
import HeadingComponent from "./HeadingComponent";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    padding: "40px 0px",
  },
  title: {
    textAlign: "right",
    marginRight: 30,
  },
  headings: {
    width: "100%",
    marginTop: 50,
    padding: "10px 0px",
  },
  sections: {
    width: "100%",
    maxHeight: 630,
    overflow: "scroll",
  },
  buttons: {
    margin: "50px 0px 10px 10px",
  },
});

const AnswerSheetComponent: React.FC = (props) => {
  const classes = useStyles();
  const [formKey, setFormKey] = React.useState(uuid());
  const [answerKey, setAnswerKey] = React.useState<string>("A4N7F7W");
  //@ts-ignore
  const [answerResults, setAnswerResults] = React.useState<AnswerKey>(tests[answerKey]);
  const [hasSubmitted, setHasSubmitted] = React.useState<boolean>(false);

  const handleReset = () => {
    //@ts-ignore
    setAnswerResults(tests[answerKey]);
    setHasSubmitted(false);
    setFormKey(uuid());
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
    <Row>
      <Col span={6}>
        {hasSubmitted && (
          <SummaryComponent
            scores={answerResults.sections.map((i) => {
              //@ts-ignore
              return scoresJson[i.title][i.results?.filter(Boolean).length];
            })}
          />
        )}
      </Col>
      <Col span={18}>
        <div className={classes.root}>
          <Row justify='end'>
            <Col span={4}>
              <h3 className={classes.title}>{answerResults.title}</h3>
            </Col>
            <Col span={4}>
              <Input.Search placeholder='Enter Test ID' enterButton onSearch={handleSelectTest} />
            </Col>
          </Row>
          <Row className={classes.headings}>
            {answerResults.sections.map((section, sectionIndex) => (
              <HeadingComponent key={sectionIndex} section={section} hasSubmitted={hasSubmitted} />
            ))}
          </Row>
          <Row key={formKey} className={classes.sections} justify='space-between'>
            <Card bodyStyle={{ display: "flex" }}>
              {answerResults.sections.map((section, sectionIndex) => (
                <SectionComponent
                  key={sectionIndex}
                  section={section}
                  hasSubmitted={hasSubmitted}
                  onChange={(data, questionIndex) =>
                    handleOnChange(data, sectionIndex, questionIndex)
                  }
                />
              ))}
            </Card>
          </Row>
          <Row justify='end'>
            <Button className={classes.buttons} onClick={() => handleReset()}>
              Reset
            </Button>
            <Button
              className={classes.buttons}
              type='primary'
              onClick={handleSubmit}
              disabled={!canSubmit()}
            >
              Check answers
            </Button>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AnswerSheetComponent;
