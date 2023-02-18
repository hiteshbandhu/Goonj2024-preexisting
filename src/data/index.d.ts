interface prevGoonjProp {
  refer?: RefObject<HTMLDivElement>;
}

interface eventTileProp {
  src: string;
  alt: string;
  title: string;
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
}

interface popupProp {
  setpopup: Dispatch<SetStateAction<boolean>>;
}
