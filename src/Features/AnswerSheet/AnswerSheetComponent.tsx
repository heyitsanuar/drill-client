import * as React from 'react';
import { Row } from 'antd';
import SectionComponent from './SectionComponent';
import { createUseStyles } from 'react-jss';
import answerKey from 'shared/assets/key-scripts/practice-test-1.json';

const useStyles = createUseStyles({
  root: {
    width: '100%',
  },
});

const AnswerSheetComponent: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Row className={classes.root} justify='space-between'>
      {answerKey.sections.map((section, index) => (
        <SectionComponent key={index} />
      ))}
    </Row>
  );
};

export default AnswerSheetComponent;
