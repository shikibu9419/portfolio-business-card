export type PropsType = {
  size: number;
};

export const Facebook = ({ size }: PropsType) => (
  <img src="/icons/facebook.svg" width={size} height={size} />
);

export const Instagram = ({ size }: PropsType) => (
  <img src="/icons/instagram.svg" width={size} height={size} />
);

export const Twitter = ({ size }: PropsType) => (
  <img src="/icons/twitter.svg" width={size} height={size} />
);
