import React, { useEffect, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "asciinema-player/dist/bundle/asciinema-player.css";
import { useWindowSize } from "@docusaurus/theme-common";

type AsciinemaPlayer = { el: Element; dispose: () => void };

interface AsciinemaPlayerProps {
  src: string;
  // START asciinemaOptions
  cols?: string;
  rows?: string;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean | number;
  startAt?: number | string;
  speed?: number;
  idleTimeLimit?: number;
  theme?: string;
  poster?: string;
  fit?: string;
  fontSize?: string;
  // END asciinemaOptions
}

const AsciinemaPlayer: React.FC<
  AsciinemaPlayerProps & { library: { create: (...[]) => any } }
> = ({ src, library, ...asciinemaOptions }) => {
  const ref = useRef<HTMLDivElement>(null);
  const window = useWindowSize();

  useEffect(() => {
    const currentRef = ref.current;
    const player = library.create(src, currentRef, {
      autoPlay: true,
      loop: true,
      idleTimeLimit: 1,
      ...asciinemaOptions,
    } as AsciinemaPlayerProps) as AsciinemaPlayer;
    return () => {
      player.dispose();
    };
  }, [src, window]);

  return <div style={{ width: "100%", height: "80%" }} ref={ref} />;
};

const AsciinemaPlayerWrapper: React.FC<AsciinemaPlayerProps> = ({
  ...props
}) => {
  return (
    <BrowserOnly>
      {() => {
        const library = require("asciinema-player");
        return <AsciinemaPlayer library={library} {...props} />;
      }}
    </BrowserOnly>
  );
};

export default AsciinemaPlayerWrapper;
