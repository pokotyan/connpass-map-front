import * as React from "react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import {
  mergeStyles,
  mergeStyleSets
} from "office-ui-fabric-react/lib/Styling";

const iconClass = mergeStyles({
  fontSize: 20,
  height: 20,
  width: 20
});
const setColor = (color: string) =>
  mergeStyleSets({
    green: [{ color }, iconClass]
  });

export default ({ iconName, color }: { iconName: string; color: string }) => {
  const classNames = setColor(color);

  return <FontIcon iconName={iconName} className={classNames.green} />;
};
