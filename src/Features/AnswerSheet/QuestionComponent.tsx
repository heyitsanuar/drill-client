import * as React from 'react';
import { Radio } from 'antd';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    width: '100%',
  },
});

const QuestionComponent: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Radio.Group className={classes.root}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

export default QuestionComponent;
