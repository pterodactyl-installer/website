import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import TimezoneSelect, { ITimezoneOption } from "react-timezone-select";
import { useColorMode } from "@docusaurus/theme-common";

const index: React.FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezoneOption>({
    value: "none",
    label: "Select a timezone",
  });

  const { isDarkTheme } = useColorMode();

  return (
    <>
      <TimezoneSelect
        className="padding-bottom--md"
        value={selectedTimezone}
        theme={(theme) => {
          theme.colors.primary = "var(--ifm-color-primary)";
          if (isDarkTheme) {
            theme.colors = {
              ...theme.colors,
              neutral0: "var(--ifm-code-background)",
              primary25: "var(--ifm-color-primary-darkest)",
              neutral30: "var(--ifm-font-color-base)",
              neutral50: "var(--ifm-font-color-base)",
              neutral80: "var(--ifm-font-color-base)",
            };
          }
          return theme;
        }}
        onChange={setSelectedTimezone}
        labelStyle="abbrev"
      />
      <CodeBlock>{`* Select timezone: ${selectedTimezone.value}`}</CodeBlock>
    </>
  );
};

export default index;
