import * as React from "react";
import TimelineComponent from "./TimelineComponnet";
import { createUseStyles } from "react-jss";
import logoImg from "shared/assets/img/logo.png";
import TimerComponent from "./TimerComponent";
import { SummaryView } from "app/models/SummaryModel";

const useStyles = createUseStyles({
  root: {
    marginTop: 70,
  },
  title: {
    margin: "50px 0px 40px",
  },
  congratulations: {
    marginBottom: 30,
  },
});

const SummaryComponent: React.FC<SummaryView> = (props) => {
  const classes = useStyles();
  const { scores } = props;

  const total: any = scores?.reduce((acc, curr) => acc + curr);
  const finalScore = (parseInt(total) * 10) / 3;

  return (
    <div className={classes.root}>
      <img src={logoImg} alt='drillo' width='200px' />
      <h1 className={classes.title}>Summary</h1>
      <TimelineComponent />
      <div className={classes.congratulations}>
        <h2>Congratulations!</h2>
        <h3>You just got a {finalScore} score</h3>
      </div>
      <TimerComponent />
    </div>
  );
};

export default SummaryComponent;
