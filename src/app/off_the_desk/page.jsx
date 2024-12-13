import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import image1 from '@/images/photos/image-2.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import hiking_image1 from '@/images/photos/hiking001.jpg'
import hiking_image2 from '@/images/photos/hiking002.jpg'
import hiking_image3 from '@/images/photos/hiking003.jpg'
import marathon_image1 from '@/images/photos/marathon001.jpg'
import marathon_image2 from '@/images/photos/marathon002.jpg'
import marathon_image3 from '@/images/photos/marathon003.jpg'
import marathon_image4 from '@/images/photos/marathon004.jpg'
import gardening_image1 from '@/images/photos/gardening001.jpg'
import gardening_image2 from '@/images/photos/gardening002.JPG'
import gardening_image3 from '@/images/photos/gardening003.JPG'
import gardening_image4 from '@/images/photos/gardening004.JPG'
import crochet_image1 from '@/images/photos/crochet001.jpg'
import crochet_image2 from '@/images/photos/crochet002.jpg'
import crochet_image3 from '@/images/photos/crochet003.jpg'
import crochet_image4 from '@/images/photos/crochet004.jpg'






import clsx from 'clsx'
import Image from 'next/image'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'off the desk',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function OffDesk() {
  return (
    <SimpleLayout
      title="off the clock, beyond the desk."
      intro="Here, I share the activities that bring balance (and joy) to my life, from hiking and marathons to kitchen gardening, crochet, and African fiction. These passions challenge me physically, mentally, and creatively, offering both inspiration and personal growth while helping me maintain a well-rounded perspective.."
    >
      <div className="space-y-20">
        <ToolsSection title="High-altitude mountaineering">
        Hiking began as a way to connect socially as a work-from-home person but has grown into a personal challenge and a source of deep fulfillment. I’ve summited two of Africa’s highest peaks—Kilimanjaro and Mount Kenya—experiences that pushed my mental and physical boundaries while leaving me in awe of nature’s grandeur. Now, I dream of climbing Ruwenzori, The Virungas, and Oldoinyo Lengai—the world’s only active carbonatite volcano. Beyond Africa, the thought of exploring trails on other continents excites me, blending my love of adventure with a desire to see the world’s beauty. Each hike reminds me that life’s most rewarding journeys often begin with a single step and an open mind. And I am a summit-seeker, its's not only about the journey :)

        </ToolsSection>
        <PhotosHiking />
        <ToolsSection title="Wannabe marathoner">

        I know I’ll never be Kipchoge, but there’s something about marathoning that keeps me coming back. Maybe it’s the thrill of wearing the same T-shirt as thousands of others, the joy of collecting finisher medals, or just being part of something bigger than myself. I’ve run the Nairobi City Marathon and Stanchart Marathons, even once attempting a dusk-to-dawn marathon—though I didn’t quite make it to dawn (but no regrets here!). For me, it’s not about breaking records but about the joy of showing up, pushing my limits, and embracing the camaraderie that comes with every race.
        </ToolsSection>
        <PhotosMarathon />
        <ToolsSection title="Plant-mom, but I eat my babies :)">
        Despite having faux-plants all over my house, I find real joy in my kitchen garden, where I grow more edible vegetables than flowers. Gardening is my way of slowing down and caring for something simple and alive. I realized that my need to have a kitchen garden is deeply connected to wanting to hold onto a channel of connection to my mother, who always had a knack for growing things. I get surprisingly attached to every plant, feeling a sense of pride when they thrive and a small sense of loss when they don’t. Rosemary has become my stubborn challenge, refusing to grow the way I expect, while mint is taking over the garden, spreading so fast it’s practically setting up its own empire. Gardening reminds me that life, like plants, is full of growth, mess, and small victories.
        </ToolsSection>
        <PhotosGardening />
        <ToolsSection title="Crochet">
        Crochet is something I first learned when I was probably younger than 10, but I didn’t really stick with it at the time. When I picked up yarn again in my mid-twenties, the craft was still intact—some things just can’t be erased from memory, especially those learned in childhood. The rhythmic motion of the hook in my hand feels like an old friend, grounding me in the present while connecting me to my younger self. Crochet is a form of creative escape, a way to make something tangible with my hands, and a reminder that skills, like memories, have a way of staying with you even when you least expect it.
        </ToolsSection>
        <PhotosCrochet />
        {/* <ToolsSection title="African Fiction">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
        </ToolsSection>
        <Photos /> */}
      </div>
    </SimpleLayout>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
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

function PhotosHiking() {
  let rotations = ['-rotate-3', 'rotate-3', '-rotate-3', 'rotate-3']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center overflow-hidden py-4 ">
        {[hiking_image3, hiking_image2, image3, hiking_image1].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex],
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

function PhotosMarathon() {
  let rotations = ['-rotate-3', 'rotate-3', '-rotate-3', 'rotate-3']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center overflow-hidden py-4 ">
        {[marathon_image1, marathon_image2, marathon_image3, marathon_image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex],
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

function PhotosGardening() {
  let rotations = ['-rotate-3', 'rotate-3', '-rotate-3', 'rotate-3']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center overflow-hidden py-4 ">
        {[gardening_image1, gardening_image2, gardening_image3, gardening_image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex],
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

function PhotosCrochet() {
  let rotations = ['-rotate-3', 'rotate-3', '-rotate-3', 'rotate-3']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center overflow-hidden py-4 ">
        {[crochet_image1, crochet_image2, crochet_image3, crochet_image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex],
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

