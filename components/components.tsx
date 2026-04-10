/** Components file for top level react components */

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

type HeaderLinkProps = {
  children: ReactNode;
  href: Url;
  ariaLabel?: string;
  title?: string;
};

/**
 * Link button with layered dropdown shadow effect on hover
 * Uses nested spans with clip-path triangles to create multi-layered shadows
 * @param href external link url
 * @param title supplemental advisory information
 */
export function HeaderLink({
  children,
  href,
  ariaLabel,
  title,
}: HeaderLinkProps): ReactNode {
  return (
    <span
      className={
        "flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-200 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_110%,50%_140%,0_110%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-effect2)]"
      }
    >
      <span
        className={
          "flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-200 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_105%,50%_125%,0_105%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-effect1)]"
        }
      >
        <span
          className={
            "flex shadow-[0rem_0rem_0rem_rgba(0,0,0,0)] transition-all duration-200 ease-in-out [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_110%,0_100%)] hover:shadow-[0rem_4rem_0rem_0rem_var(--color-navbar-hover)]"
          }
        >
          <Link
            className="hover:bg-navbar-hover flex items-center p-1.5 duration-300"
            href={href}
            aria-label={ariaLabel}
            title={title}
          >
            {children}
          </Link>
        </span>
      </span>
    </span>
  );
}

type LineBreakProps = {
  className?: string;
};

/**
 * Horizontal gradient bar with transparent edges for separating sections
 * @param className - Optional custom classes to override default styling.
 *   Use 'via-...' for color and 'h-...' for height customization
 */
export function LineBreak({ className }: LineBreakProps): ReactNode {
  // If className is used, use base and argument styling, otherwise use default
  const baseClass =
    "w-full bg-linear-to-r from-transparent from-10% via-50% to-transparent to-90%";

  const defaultClass = `${baseClass} via-line-break h-1`;

  return (
    <div
      data-desc="border-gradient"
      className={className ? `${baseClass} ${className}` : defaultClass}
    />
  );
}
