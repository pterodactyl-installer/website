import Link from "@docusaurus/Link";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface IconLinkProps {
  to: string;
  icon: IconProp;
  text: string;
  size?: SizeProp;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, to, text, size }) => {
  return (
    <div className={`padding-bottom--sm`}>
      <Link to={to}>
        <div className="button button--outline button--primary button--lg hero__subtitle">
          <FontAwesomeIcon size={size ?? "2x"} icon={icon} />
          <span className="padding-left--sm">{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default IconLink;
