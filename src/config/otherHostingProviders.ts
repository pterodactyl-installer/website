import { faCloud, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { IconLinkProps } from "../components/IconLink";

const Providers: IconLinkProps[] = [
  { icon: faCloud, to: "other_cloud", text: "Generic Cloud Hosting" },
  { icon: faCloudArrowDown, to: "self_hosting", text: "Self Hosting" },
];

export default Providers;
