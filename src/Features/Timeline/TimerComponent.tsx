import * as React from "react";
import { Button } from "antd";
import { createUseStyles } from "react-jss";
import Timer from "react-compound-timer";

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

  return (
    <div className={classes.root}>
      <h2>Stopwatch</h2>
      <Timer
        initialTime={0}
        formatValue={(val: any) => (val < 10 ? `0${val}` : val)}
        startImmediately={false}
      >
        {({ start, resume, pause, stop, reset, timerState, getTime }: any) => (
          <React.Fragment>
            <h1>
              <Timer.Hours />:
              <Timer.Minutes />:
              <Timer.Seconds />
            </h1>
            <div className={classes.btnContainer}>
              {getTime() === 0 && !isEnabled ? (
                <Button
                  className={`${classes.btn} ${classes.btnStart}`}
                  onClick={() => {
                    setIsEnabled(true);
                    start();
                  }}
                >
                  Start
                </Button>
              ) : (
                <React.Fragment>
                  {isEnabled ? (
                    <Button
                      className={classes.btn}
                      type='primary'
                      danger
                      onClick={() => {
                        setIsEnabled(false);
                        pause();
                      }}
                    >
                      Stop
                    </Button>
                  ) : (
                    <Button
                      className={classes.btn}
                      type='primary'
                      danger
                      onClick={() => {
                        setIsEnabled(true);
                        resume();
                      }}
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    className={classes.btn}
                    onClick={() => {
                      reset();
                    }}
                  >
                    Reset
                  </Button>
                </React.Fragment>
              )}
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
};

export default TimerComponent;
