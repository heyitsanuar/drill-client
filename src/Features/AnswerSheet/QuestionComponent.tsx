import * as React from "react";
import { Radio } from "antd";
import { createUseStyles } from "react-jss";
import { QuestionView } from "app/models/AnswerSheetModel";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

const useStyles = createUseStyles({
  root: {
    width: "100%",
  },
  number: {
    display: "inline-block",
    width: 30,
  },
});

const QuestionComponent: React.FC<QuestionView> = (props) => {
  const classes = useStyles();
  const { number, isCorrect, hasSubmitted, onChange } = props;

  return (
    <Radio.Group className={classes.root} disabled={hasSubmitted} onChange={onChange}>
      <span className={classes.number}>{number + 1}.-</span>
      &nbsp;
      <Radio value='A'>A</Radio>
      <Radio value='B'>B</Radio>
      <Radio value='C'>C</Radio>
      <Radio value='D'>D</Radio>
      {hasSubmitted && (
        <React.Fragment>
          {isCorrect ? (
            <CheckCircleTwoTone twoToneColor='#52c41a' />
          ) : (
            <CloseCircleTwoTone twoToneColor='#c0392b' />
          )}
        </React.Fragment>
      )}
    </Radio.Group>
  );
};

export default QuestionComponent;
