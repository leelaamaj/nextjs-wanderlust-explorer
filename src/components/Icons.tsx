import type { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement>;
export function HeartIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}
export function CompassIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <circle cx="20" cy="20" r="17" />
      <path d="M20 0v6m0 28v6M0 20h6m28 0h6" />
      <path d="m27 11-4 12-10 6 4-12Z" fill="currentColor" />
      <path d="m27 11-10 6 6 6Z" fill="#dd590d" stroke="none" />
    </svg>
  );
}
export function SearchIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10" cy="10" r="7" />
      <path d="m15 15 6 6" />
    </svg>
  );
}
export function PinIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
export function ArrowIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
