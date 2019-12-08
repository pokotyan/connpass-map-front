import * as React from "react";
import {
  DatePicker,
  DayOfWeek,
  IDatePickerStrings
} from "office-ui-fabric-react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import * as connpassActions from "../../../../actions/connpass";
import styles from "./style.module.scss";
import { AppState } from "../../../../reducers";
import { useWindowDimensions } from "../../../../utils/hooks";

const DAY_OF_WEEK: {
  [k: string]: string;
} = {
  "0": "日",
  "1": "月",
  "2": "火",
  "3": "水",
  "4": "木",
  "5": "金",
  "6": "土"
};

const MONTHS = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月"
];

const DayPickerStrings: IDatePickerStrings = {
  months: MONTHS,
  shortMonths: MONTHS,
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  shortDays: ["日", "月", "火", "水", "木", "金", "土"],
  goToToday: "Go to today",
  prevMonthAriaLabel: "Go to previous month",
  nextMonthAriaLabel: "Go to next month",
  prevYearAriaLabel: "Go to previous year",
  nextYearAriaLabel: "Go to next year",
  closeButtonAriaLabel: "Close date picker"
};

export default () => {
  const dispatch = useDispatch();
  const date = useSelector((state: AppState) => state.connpass.search.date);
  const { width } = useWindowDimensions();
  const isSP = width < 740;

  return (
    <div className={styles.picker}>
      <DatePicker
        value={date ? dayjs(date).toDate() : undefined}
        firstDayOfWeek={DayOfWeek.Sunday}
        strings={DayPickerStrings}
        placeholder="日付"
        formatDate={date => {
          const formatRule = isSP ? "MM月DD日d" : "YYYY年MM月DD日d";
          const formatedDate = dayjs(date!).format(formatRule);
          const dayOfWeek = formatedDate.slice(-1);

          return `${formatedDate.slice(0, -1)}(${DAY_OF_WEEK[dayOfWeek]})`;
        }}
        onSelectDate={date => {
          const formatedDate = dayjs(date!).format("YYYYMMDD");

          dispatch(
            connpassActions.setDate({
              date: formatedDate
            })
          );
        }}
      />
    </div>
  );
};
