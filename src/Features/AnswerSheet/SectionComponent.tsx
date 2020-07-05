import * as React from 'react';
import { Col } from 'antd';
import QuestionComponent from './QuestionComponent';

const SectionComponent: React.FC = (props) => {
  return (
    <Col span={8}>
      <QuestionComponent />
      <QuestionComponent />
      <QuestionComponent />
      <QuestionComponent />
      <QuestionComponent />
    </Col>
  );
};

export default SectionComponent;
