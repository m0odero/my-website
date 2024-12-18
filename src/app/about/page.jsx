import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-700 dark:text-pink-700 dark:hover:text-pink-700"
      >
        <Icon className="h-6 w-6 flex-none fill-pink-700 transition group-hover:fill-pink-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'margaret odero: live full die empty.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-pink-700 sm:text-5xl dark:text-pink-700">
            live full, die empty.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            When Les Brown said "Live full, die empty", it felt like a quiet nudge to how I aspire
            to live my life. I’m Margaret, a data scientist with a spark for power systems. With my
            unique blend of electrical engineering expertise and data science edge, I’m working
            to make our energy grids smarter, more reliable, and accessible to all. But my passion
            doesn’t end at my desk. When I feel convicted to do something, I dive in fully—whether
            it’s tackling thrilling challenges in high-altitude hiking, inching closer to being a
            marathoner, or analyzing voltage patterns to understand our energy systems better.
            </p>
            <p>
            Curiosity is my compass. I honor it when it sparks, whether through the vibrant pages of
            African fiction, the quiet craft of crochet, the grounding practice of gardening, or my
            pursuit of financial freedom. Sometimes my interests ebb and flow; sometimes they
            resurface, stronger than ever. But I embrace them all with the same energy and
            determination. To live fully, for me, is to bring my whole self to the things that light
            me up—knowing that every step I take, every spark I follow, and every challenge I
            conquer adds richness to the story I’m writing with my life.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/__modero?s=21&t=KWiAJlbkUgmDsS8JqLJ3lQ" icon={XIcon}>
              follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/_modero/profilecard/?igsh=MWk3NzJhdWMyMHdkbw==" icon={InstagramIcon} className="mt-4">
              follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/m0odero" icon={GitHubIcon} className="mt-4">
              follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/margaret-odero/" icon={LinkedInIcon} className="mt-4">
              follow on LinkedIn
            </SocialLink>
            {/* <SocialLink
              href="margaretodero59@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-700/40"
            >
              margaretodero59@gmail.com
            </SocialLink> */}
          </ul>
        </div>
      </div>
    </Container>
  )
}
