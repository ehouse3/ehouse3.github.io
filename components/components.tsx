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
    <div className="flex antialiased transition-discrete transition-all">
      <span className="flex antialiased transition-discrete transition-all shadow-[0rem_0rem_0rem_rgba(0,0,255,1)] hover:shadow-[0rem_3rem_0rem_0rem_rgba(0,0,255,1)] [clip-path:polygon(0%_0%,100%_0%,100%_120%,50%_130%,0_120%)]">
        <span className="flex antialiased transition-discrete transition-all shadow-[0rem_0rem_0rem_rgba(255,0,0,1)] hover:shadow-[0rem_3rem_0rem_0rem_rgba(255,0,0,1)] [clip-path:polygon(0%_0%,100%_0%,100%_110%,50%_120%,0_110%)]">
          <Link
            className="transition-discrete transition-all hover:bg-neutral-600 p-2 shadow-[0rem_0rem_0rem_rgba(0,255,0,1)] hover:shadow-[0rem_3rem_0rem_0rem_rgba(0,255,0,1)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_110%,0_100%)]"
            href={props.href}
          >
            {props.children}
          </Link>
        </span>
      </span>
    </div>
  );
}
