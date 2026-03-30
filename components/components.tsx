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
    <div className="flex transition-discrete transition-all antialiased">
      <span className="flex transition-discrete transition-all antialiased shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] hover:shadow-[0rem_2rem_0rem_0rem_rgba(120,123,128,1)] [clip-path:polygon(0%_0%,100%_0%,100%_110%,50%_140%,0_110%)]">
        <span className="flex transition-discrete transition-all antialiased shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] hover:shadow-[0rem_2rem_0rem_0rem_rgba(102,105,109,1)] [clip-path:polygon(0%_0%,100%_0%,100%_105%,50%_125%,0_105%)]">
          <Link
            className="flex items-center transition-discrete transition-all antialiased p-1.5 text-center hover:bg-navbar-hover shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] hover:shadow-[0rem_2rem_0rem_0rem_rgba(77,79,82,1)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_110%,0_100%)]"
            href={props.href}
          >
            {props.children}
          </Link>
        </span>
      </span>
    </div>
  );
}
