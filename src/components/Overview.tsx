import { sarpanch } from "@/utils/fonts"
import LinkCTA from '@/components/LinkCTA'
import OverviewCard from "@/components/OverviewCard"
import trainerImage from '@/assets/images/trainer.png'
import workoutImage from '@/assets/images/workout.png'

const Overview = () => {
  return (
    <section className="overview py-5 px-3">
      <div className="container d-flex flex-column row-gap-4">
        <h2 className={["title text-uppercase", sarpanch.className].join(' ')}>
          <span>No Pain, No Gain</span> Think and Train
        </h2>

        <LinkCTA
          className="fs-5"
          href='/services'
          text='View Schedule'
        />

        <p className='lead'>
          <strong>Fit Trus</strong> is leading fitness center who play a vital role in promoting regular physical activity, improving overall health and fitness levels, and providing a supportive environment for individuals to pursue their wellness goals.
        </p>

        <p className="lead">
          Whether you're looking to lose weight, build strength, improve flexibility, or simply maintain an active lifestyle, <strong>Fit Trus</strong> can provide the resources, guidance, and motivation needed to succeed.
        </p>

        <OverviewCard 
          className="mt-4"
          image={trainerImage}
          title="Solid Teams"
          paragraph="Fit Trus provide personal training services, where individuals can work one-on-one with a certified personal trainer to develop personalized workout plans, receive guidance on proper exercise techniques, and stay motivated."
        />

        <OverviewCard 
          className="mt-4"
          image={workoutImage}
          imageOrder={2}
          title="Leading Culture"
          paragraph="Fit Trus is a leading chain of fitness centers dedicated to promoting health, wellness, and active lifestyles. Fit Trus has grown from a single location to a nationwide network of state-of-the-art facilities."
        />
      </div>
    </section>
  )
}

export default Overview