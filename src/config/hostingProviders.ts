import {
  faAws,
  faDigitalOcean,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { IconLinkProps } from "../components/IconLink";

const Providers: IconLinkProps[] = [
  { icon: faAws, to: "aws", text: "Amazon Web Services" },
  { icon: faDigitalOcean, to: "digital_ocean", text: "Digital Ocean" },
  { icon: faGoogle, to: "google_cloud", text: "Google Cloud Platform" },
  { icon: faCrow, to: "google_cloud", text: "Oracle" },
];

export default Providers;
