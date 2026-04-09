/** Components file for top level react components */

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps {
  children: ReactNode;
  href: Url;
  ariaLabel?: string;
  title?: string;
}
/** Link button on layout of header w/ effect on hovering*/
export function HeaderLink(props: HeaderLinkProps): ReactNode {
  // Layered dropdown effect:
  // Layered Span elements with hover transition creates multiple shadows,
  // each with a clip path of a triangle that extends below the span to cut off the shadow.
  return (
    <span className="flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-200 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_110%,50%_140%,0_110%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-effect2)]">
      <span className="flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-200 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_105%,50%_125%,0_105%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-effect1)]">
        <Link
          className="hover:bg-navbar-hover flex items-center p-1.5 text-center text-2xl shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-200 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_110%,0_100%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-hover)]"
          href={props.href}
          aria-label={props.ariaLabel}
          title={props.title}
        >
          {props.children}
        </Link>
      </span>
    </span>
  );
}

interface LineBreakProps {
  className?: string;
  isSkeleton?: boolean;
}
/** Horizontal bar that has transparent edges for breaking up sections
 * @argument className Modify color with 'via-...' ex 'via-red-500'
 */
export function LineBreak(props: LineBreakProps): ReactNode {
  if (props.className && props.isSkeleton) {
    // Classname overides default color
    return (
      <div
        data-desc="border-gradient"
        className={`w-full bg-linear-to-r from-transparent from-10% via-50% to-transparent to-90% ${props.className || ""}`}
      ></div>
    );
  } else {
    return (
      <div
        data-desc="border-gradient"
        className={`via-line-break h-1 w-full bg-linear-to-r from-transparent from-10% via-50% to-transparent to-90% ${props.className || ""}`}
      ></div>
    );
  }
}
