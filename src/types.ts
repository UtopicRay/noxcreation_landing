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
export type Favourite = {
  icon: any;
  title: string;
  description: string;
};
export type StoryProps = {
  image: string;
  title: string;
  avatar: string;
  autor: string;
};
export type PostApi = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
