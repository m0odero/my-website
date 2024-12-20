import Link from 'next/link'
import clsx from 'clsx'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

// function SocialLink({ className, href, children, icon: Icon }) {
//   return (
//     <li className={clsx(className, 'flex')}>
//       <Link
//         href={href}
//         className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-700 dark:text-pink-700 dark:hover:text-pink-700"
//       >
//         <Icon className="h-6 w-6 flex-none fill-pink-700 transition group-hover:fill-pink-700" />
//         <span className="ml-4">{children}</span>
//       </Link>
//     </li>
//   )
// }


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-700 dark:text-pink-700 dark:hover:text-pink-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="h-6 w-6 flex-none fill-pink-700 transition group-hover:fill-pink-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}


export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-pink-700 dark:text-pink-700">
                <NavLink href="/about">about</NavLink>
                <NavLink href="/projects">projects</NavLink>
                <NavLink href="/articles">articles</NavLink>
                {/* <NavLink href="/speaking">Speaking</NavLink> */}
                <NavLink href="/off_the_desk">off the clock</NavLink>
              </div>
              <div className="lg:pl-20">
                <ul role="list" className="flex flex-row gap-4">
                  <SocialLink
                    href="https://x.com/__modero?s=21&t=KWiAJlbkUgmDsS8JqLJ3lQ"
                    icon={XIcon}
                    className="mt-4" target="_blank"
                    rel="noopener noreferrer">
                  </SocialLink>
                  <SocialLink href="https://www.instagram.com/_modero/profilecard/?igsh=MWk3NzJhdWMyMHdkbw==" icon={InstagramIcon} className="mt-4">
                  </SocialLink>
                  <SocialLink href="https://github.com/m0odero" icon={GitHubIcon} className="mt-4">
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/margaret-odero/" icon={LinkedInIcon} className="mt-4">
                  </SocialLink>
                </ul>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Margaret O. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
