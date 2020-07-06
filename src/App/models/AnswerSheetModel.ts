import { RadioChangeEvent } from "antd/lib/radio";

export interface ISection {
  title: string;
  items: string;
  results?: boolean[];
}

export interface AnswerKey {
  title: string;
  sections: ISection[];
}

export interface SectionView {
  section: ISection;
  hasSubmitted: boolean;
  onChange: (data: string, sectionIndex: number, questionIndex: number) => void;
}

export interface QuestionView {
  number: number;
  isCorrect: boolean;
  hasSubmitted: boolean;
  onChange: (e: RadioChangeEvent) => void;
}
