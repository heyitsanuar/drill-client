import * as React from "react";
import { Timeline } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
});

const TimelineComponent: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Timeline>
        <Timeline.Item>Listening Comprehension</Timeline.Item>
        <Timeline.Item>Grammar & Structure</Timeline.Item>
        <Timeline.Item>Reading Comprehension</Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
