import { faCloudflare } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { IconLinkProps } from "../components/IconLink";

const Providers: IconLinkProps[] = [
  { icon: faCloudflare, to: "cloudflare", text: "Cloudflare" },
  { icon: faGear, to: "generic_dns", text: "Generic DNS" },
];

export default Providers;
