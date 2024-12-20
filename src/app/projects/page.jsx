import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoModero from '@/images/logos/modero_logo.svg'
import image1 from '@/images/photos/smart_meter.jpg'
import uncertainty from '@/images/photos/uncertainty.jpg'
import open_phase from '@/images/photos/open-phase1.jpg'
import mapping from '@/images/photos/mapping.png'

const projects = [
  {
    name: 'Open-phase Condition in Distribution Transformers',
    description:
      'This work explores how monitoring voltage data at customer premises can help detect open-phase conditions in distribution transformers. Through analysis of voltage patterns, cross-household comparisons, and fault correlations, it demonstrates the potential of using consumer-level data for grid diagnostics.',
    link: { href: 'https://github.com/m0odero/open-phase-condition-transformers', label: 'github.com' },
    logo: open_phase,
  },
  {
    name: 'Communicating Uncertainty in Energy Data: Techniques and Scenarios',
    description:
      'A review of techniques for communicating uncertainty in energy data across five scenarios: power outage reporting, voltage profiles, demand response, grid frequency, and emissions estimation. Each scenario shows how proper uncertainty communication enhances decision-making in energy systems.',
    link: { href: 'https://github.com/m0odero/uncertainty_energy_data', label: 'github.com' },
    logo: uncertainty,
  },
  {
    name: 'Smart Meter Data Analytics for Households in Switzerland',
    description:
      'Smart meter data analytics on 15-minute resolution power data from households households in Switzerland as provided by a local utility company. In addition to the smart meter data, we also load temperature measurements from a nearby weather station for correlation purposes.',
    link: { href: 'https://github.com/m0odero/smart_meter_data_analytics', label: 'github.com' },
    logo: image1,
  },
  {
    name: 'Mapping Geographic Data',
    description:
      'Through my work with power grid data, I have learnt that geographic visualization reveals crucial patterns in grid performance. By mapping power quality against terrain, or socioeconomic stratifications, we can better understand how location impacts service reliability and guides infrastructure planning, hence help transforming how we approach grid modernization and renewable energy integration.',
    link: { href: 'https://github.com/m0odero/mapping_geographic_data', label: 'github.com' },
    logo: mapping,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Here is an account of some data and power systems related projects I have worked on. Herein, you will find me either digging into what more we can learn from data, pulling together different data sources, to make it more insightful, exploring best practices in data reporting, among other intersting pursuits in the world of data, power systems, mathematics, and statistics.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="curiosity and continuous learning."
      intro="Here is an account of some data and power systems related projects I have worked on. Herein, you will find me either digging into what more we can learn from data, pulling together different data sources, to make it more insightful, exploring best practices in data reporting, among other intersting pursuits in the world of data, power systems, mathematics, and statistics."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"> */}
              <Image
                src={project.logo}
                alt=""
                className="h-20 w-50 justify-center"
                unoptimized
              />
            {/* </div> */}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-pink-700 transition group-hover:text-pink-700 dark:text-pink-700">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
