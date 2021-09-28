import { default as NextLink } from "next/link";

export default function Link({ ...props }) {
  return (
    <NextLink href={props.href}>
      <a className={`text-blue-800 ${props.className}`}>Home</a>
    </NextLink>
  );
}
