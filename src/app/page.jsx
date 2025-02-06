import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
// import { Background} from '@/components/BackGround'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/gardening003.JPG'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  // Get the current date to compare with the article's date
  const currentDate = new Date()
  const articleDate = new Date(article.date)

  // Check if the article date is in the future
  const isComingSoon = articleDate > currentDate
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>{isComingSoon ? 'Coming soon...' : 'Read article'}</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-pink-700 transition group-hover:fill-zinc-800 dark:fill-pink-700 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact me</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Send me a message via email.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-pink-700 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Send
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'nLine',
      title: 'Data Analyst',
      logo: logoPlanetaria,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Carnegie Mellon University - Africa',
      title: 'Graduate Teaching Assistant',
      logo: logoAirbnb,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Western Reserve Group',
      title: 'Data Analysis Intern',
      logo: logoFacebook,
      start: '2018',
      end: '2018',
    },
    {
      company: 'InfoNET Africa Ltd',
      title: 'Research and Data Analysis Intern',
      logo: logoStarbucks,
      start: '2017',
      end: '2017',
    },
  ]

  let technicalSkills = {
    'Data Analysis and Machine Learning': 'Pandas, NumPy, SQL, Geopandas, Shapely, scikit-learn, scipy',
    'Data Visualization': 'Matplotlib, Seaborn, Plotly, Folium, Grafana',
    'Mathematics and Statistics': 'Mathematical Modeling, Predictive Analytics, Statistical Testing',
    'Deployment & CI/CD': 'Docker, Travis, CircleCI, GitHub',
    'Big Data': 'PySpark, Databricks'
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <div className="my-4 border-t border-pink-200 dark:border-pink-200/40"></div>
      <div className="mt-6">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Technical Skills</span>
        </h2>
        <div className="mt-4">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category} className="mb-3">
              <h3 className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">{category}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{skills}</p>
            </div>
          ))}
        </div>
      </div>
      <Button href="https://drive.google.com/file/d/1YvZ-x1FMWWeYBGcckIE4eM7XjOTsHlAV/view?usp=drive_link" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-3', '-rotate-3', 'rotate-3', 'rotate-3', '-rotate-3']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="relative z-10 items-center justify-center h-full py-10">
        <h1 className="text-center text-4xl font-bold tracking-tight text-pink-700 sm:text-5xl dark:text-pink-700">
            margaret o.
        </h1>
        <p className="mt-6 text-center text-l text-zinc-600 dark:text-zinc-400 font-sans">
          <em>The walls between art and engineering exist only in our minds -- Theo Jansen </em>
        </p>
      </div>

      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Photos1() {
  return (
    <div className="relative -mt-8 sm:mt-10">
      <div
        className="mx-auto w-[100%] aspect-[16/9] bg-cover bg-center rounded-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${image1.src})`,
          opacity: 0.5
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-pink-700 drop-shadow-lg">
            margaret od.
          </h1>
          <h3>
          The walls between art and engineering exist only in our minds -- Theo Jansen
          </h3>
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 2)
  let articles = [
    ...(await getAllArticles()).slice(-1),  // Last article
    ...(await getAllArticles()).slice(0, 1)     // First article
  ]

  return (
    <>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Newsletter />
          </div>
        </div>
      </Container>
      <Container className="mt-0">
        <div className="max-w-10xl">
          {/* <h1 className="text-center text-4xl font-bold tracking-tight text-pink-700 sm:text-5xl dark:text-pink-700">
            margaret o.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Hey there! I’m Margaret, a data scientist with a spark for power systems.
          With my unique blend of electrical engineering expertise and data science wizardry, I’m working to make our energy grids smarter, more reliable, and accessible to all. I also love life dynamically and like taking on thrilling chalenges. Currently interested in high-altitude hiking, wannbe marathoning, African fiction, crochet, gardening, and financial freedom.
          </p> */}
          {/* <div className="mt-6 flex gap-6 flex justify-center">
            <SocialLink href="https://x.com/__modero?s=21&t=KWiAJlbkUgmDsS8JqLJ3lQ" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://www.instagram.com/_modero/profilecard/?igsh=MWk3NzJhdWMyMHdkbw=="
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/m0odero"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/margaret-odero/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div> */}
        </div>
      </Container>
    </>
  )
}
