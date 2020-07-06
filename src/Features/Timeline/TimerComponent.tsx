import * as React from "react";
import { Button } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {},
  btnContainer: {
    marginTop: 20,
  },
  btn: {
    marginRight: 10,
  },
  btnStart: {
    background: "#1c1c1c",
    color: "#fff",
    border: "none",
    "&:hover,&:focus,&:active": {
      background: "#1c1c1c",
      color: "#fff",
      border: "none",
    },
  },
});

const TimerComponent: React.FC = (props) => {
  const classes = useStyles();
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false);
  const [time, setTime] = React.useState<number>(0);

  return (
    <div className={classes.root}>
      <h2>Stopwatch</h2>
      <h1>00:00</h1>
      <div className={classes.btnContainer}>
        {isEnabled ? (
          <Button className={classes.btn} type='primary' danger>
            Stop
          </Button>
        ) : (
          <Button className={`${classes.btn} ${classes.btnStart}`}>Start</Button>
        )}
        {time !== 0 && <Button className={classes.btn}>Reset</Button>}
      </div>
    </div>
  );
};

export default TimerComponent;
