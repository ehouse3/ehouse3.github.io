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
  // hover:shadow-[0px_15px_0px_0px_rgba(255,0,0,1)]
  // hover:shadow-[0px_10px_0px_0px_rgba(0,0,0,1)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_70%,0_100%)]
  return (
    <div className="flex antialiased transition-discrete transition-all ">
      <Link
        className="transition-discrete transition-all hover:bg-neutral-600 p-2 hover:shadow-[0rem_3rem_0rem_0rem_rgba(255,0,0,1)] [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_110%,0_100%)]"
        href={props.href}
      >
        <div className="flex hover:shadow-[0px_5px_0px_0px_rgba(0,255,0,1)]"></div>
        {props.children}
      </Link>
    </div>
  );
}
