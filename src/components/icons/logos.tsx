export type PropsType = {
  size: number;
};

export const Facebook = ({ size }: PropsType) => (
  <img src="/icons/facebook.webp" width={size} height={size} loading="lazy" />
);

export const Instagram = ({ size }: PropsType) => (
  <img src="/icons/instagram.webp" width={size} height={size} loading="lazy" />
);

export const Twitter = ({ size }: PropsType) => (
  <img src="/icons/twitter.webp" width={size} height={size} loading="lazy" />
);

export const LinkedIn = ({ size }: PropsType) => (
  <img src="/icons/linked_in.svg" width={size} height={size} loading="lazy" />
);
