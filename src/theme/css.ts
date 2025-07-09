// ----------------------------------------------------------------------

type BgGradientProps = {
  direction?: string;
  startColor?: string;
  endColor?: string;
  imgUrl?: string;
  color?: string;
};

export function bgGradient(props?: BgGradientProps) {
  const direction = props?.direction || "to bottom";
  const startColor = props?.startColor;
  const endColor = props?.endColor;
  const imgUrl = props?.imgUrl;
  const color = props?.color;

  if (imgUrl) {
    return {
      background: `linear-gradient(${direction}, ${startColor || color}, ${
        endColor || color
      }), url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    };
  }

  return {
    background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
  };
}

// ----------------------------------------------------------------------

export function textGradient(value: string) {
  return {
    background: `-webkit-linear-gradient(${value})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}

// ----------------------------------------------------------------------

export const hideScrollbarY = {
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
} as const;

// ----------------------------------------------------------------------

export const hideScrollbarX = {
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
} as const;
