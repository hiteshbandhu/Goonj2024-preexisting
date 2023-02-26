interface prevGoonjProp {
  refer?: RefObject<HTMLDivElement>;
}

interface eventTileProp {
  src: string;
  alt: string;
  title: string;
  degi?: string;
  width: number;
  height: number;
}

interface profileProp {
  src: string;
  alt: string;
  des: string;
  contact?: string;
  email: string;
}

interface navProp {
  color?: string;
}

interface eventCardProp {
  src: string;
  alt: string;
  width: number;
  height: number;
  desc?: string[];
  link?: string;
  contact?: string[];
  registerLink?: string;
  registerDesc?: string[];
  setpopup?: Dispatch<SetStateAction<boolean>>;
  setEvent?: Dispatch<SetStateAction<eventCardProp>>;
}

interface popupProp {
  setpopup: Dispatch<SetStateAction<boolean>>;
}
