import React from "react";
import IconLink, { IconLinkProps } from "../IconLink";

interface LinkGridProps {
  links: IconLinkProps[];
}

const LinkGrid: React.FC<LinkGridProps> = ({ links }) => {
  return (
    <div>
      {links.map((props, idx) => (
        <IconLink {...props} key={idx} />
      ))}
    </div>
  );
};

export default LinkGrid;
