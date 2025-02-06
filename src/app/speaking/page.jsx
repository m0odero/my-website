import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'publications and speaking',
  description:
    'I’ve spoken at events and been published/co-published on expernal platforms.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="knoledge sharing - speech and text."
      intro="These are spaces I have contributed to through speaking or writing that are external to this website"
    >
      <div className="space-y-20">
        <SpeakingSection title="External Publications">
          <Appearance
            href="https://blog.nline.io/disaggregated-metrics-healthcare"
            title="Re-examining Healthcare Electrification Metrics: The Case for Disaggregated Metrics in Critical Care"
            description="An evidence-based article on healthcare electrification metrics argues for the need to disaggregate power quality and reliability (PQR) measurements at the room level rather than relying solely on facility-wide averages. Using data from nLine’s GridWatch deployment in Sierra Leone, the authors demonstrate that critical care rooms—such as ICUs and neonatal units—experience significantly different PQR outcomes compared to hospital-wide metrics, affecting patient safety and healthcare delivery. The article highlights the importance of prioritizing room-level electrification assessments to ensure that life-saving equipment receives stable and reliable power."
            event="Allan Wasega, Margaret Odero, Jordan Fast"
            cta="Read article"
          />
          <Appearance
            href="https://blog.nline.io/pqr-for-energy-justice"
            title="Leveraging Power Quality and Reliability Measurements for Electricity Equity and Justice in sub-Saharan Africa"
            description="This article explores how power quality and reliability (PQR) measurements can be used to address electricity inequities in sub-Saharan Africa. It presents a framework that integrates PQR data with energy justice theories to quantify disparities in electricity access, focusing on marginalized communities. Using data from Accra, Ghana, the study highlights the intersection of PQR and multidimensional poverty, demonstrating how poor electricity quality disproportionately impacts vulnerable households and proposing data-driven strategies for equitable energy transitions."
            event="Olufolahan Osunmuyiwa, Margaret Odero"
            cta="Read article"
          />
          <Appearance
            href="https://blog.nline.io/clustering-1"
            title="A Clustering Algorithm for Power Outage Detection"
            description="A method for estimating the extent of grid outages using individual sensor reports, while filtering out false outage reports caused by sensor unplugs or prepaid meter run-outs. The approach leverages DBSCAN, a density-based clustering algorithm, to group outage reports that are close in time and space into meaningful outage events. By defining spatial and temporal thresholds, the method ensures accurate identification of real grid outages, enabling better computation of reliability metrics like SAIDI and SAIFI."
            event="Margaret Odero, Mohini Bariya"
            cta="Read article"
          />
          <Appearance
            href="https://blog.nline.io/kenya-lessons"
            title="Measuring Outages and Voltage Quality in Rural Kenya: Engineering Lessons Learned"
            description="This blog post details the deployment of sensors in rural Kenya to measure distribution outages and voltage quality, comparing these findings with data from urban Accra. It explains the methodology of rotating sensor placements to broaden geographic coverage, evaluates sensor uptime and cellular connectivity, and reveals that, contrary to expectations, rural outage durations were shorter than those observed in Accra. These engineering lessons offer valuable insights for improving grid reliability monitoring in diverse settings."
            event="Margaret Odero, Joshua Adkins"
            cta="Read article"
          />
          <Appearance
            href="https://blog.nline.io/kenya-insights"
            title="12 Months, 150 Villages and 600 Households: Insights from Newly Grid-Connected Villages in Kenya"
            description="This blog post examines power reliability and voltage quality in newly grid-connected villages in Kenya by deploying sensors in 150 villages across five counties. The data collected over 12 months provided insights into power outages, voltage fluctuations, and the impact of distance from the transformer on voltage quality. The findings contribute to understanding how different donor-funded electrification projects influence grid performance and highlight key patterns in rural electricity reliability."
            event="Margaret Odero, Ale Wall"
            cta="Read article"
          />
        </SpeakingSection>
        <SpeakingSection title="Speaking Engagements">
          <Appearance
            href="https://www.seforall.org/EnergizingHealthcare25"
            title="Remote Monitoring and AI Tools for Monitoring, Evaluation, and Learning in Healthcare Electrification"
            description="What are emerging lessons and best practices in designing monitoring and evaluation strategies, and how can we arrive at a set of standardised indicators for the sector?."
            event="Energizing Healthcare, Feb 2025"
            cta="See event"
          />
          <Appearance
            href="#"
            title="Judge for Innovation Pitch, Data Science Track"
            description="I served as a judge for the innovation track in the KamiLimu mentorship program, where I evaluated teams’ initial and final pitches on their problem identification, proposed solutions, market opportunity, and responsible computing practices. My role involved providing constructive feedback during the pitches to help teams refine their ideas and innovation documents and determine winners of the competition."
            event="KamiLimu Mentorship Program"
            cta="..."
          />
          <Appearance
            href="#"
            title="Future of Work in Africa (Data Science Track)"
            description="."
            event="The Mastercard Foundation, Baobab Platform"
            cta="..."
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
