import { ReactElement } from "react";

export type NavigationLink = {
  link: string;
  key: string;
  label: string;
};
export type SectionTextProps = {
  title: string;
  description?: string;
  children?: ReactElement;
};
export type QuestionProps = {
  question: string;
  answer: string;
};
