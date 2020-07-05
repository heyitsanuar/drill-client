import * as React from 'react';
import { Layout } from 'antd';
import AnswerSheetComponent from 'Features/AnswerSheet/AnswerSheetComponent';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    width: '75%',
    margin: 'auto',
    background: 'none',
  },
});

const AppComponent: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <h1>App Component</h1>
      <AnswerSheetComponent />
    </Layout>
  );
};

export default AppComponent;
