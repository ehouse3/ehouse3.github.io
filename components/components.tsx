/** Components file for top level react components */

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps {
  children: ReactNode;
  href: Url;
}
/** Link button on layout of header */
export function HeaderLink(props: HeaderLinkProps): ReactNode {
  // Layered dropdown effect:
  // Layered Span elements with hover transition creates multiple shadows,
  // each with a clip path of a triangle that extends below the span to cut off the shadow.
  return (
    <span className="flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-300 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_110%,50%_140%,0_110%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-effect2)]">
      <span className="flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-300 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_105%,50%_125%,0_105%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-effect1)]">
        <Link
          className="hover:bg-navbar-hover flex items-center p-1.5 text-center text-2xl shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-300 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_110%,0_100%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-hover)]"
          href={props.href}
        >
          {props.children}
        </Link>
      </span>
    </span>
  );
}
