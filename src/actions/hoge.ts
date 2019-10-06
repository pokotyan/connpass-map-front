import actionCreatorFactory, { Action } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export interface HogeActions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

export const UPDATE_NAME = "UPDATE_NAME";
export const updateName = actionCreator<string>(UPDATE_NAME);

export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const updateEmail = actionCreator<string>(UPDATE_EMAIL);
