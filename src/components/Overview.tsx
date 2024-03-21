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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque libero accusamus natus quas, reiciendis quidem porro facere fuga nostrum, numquam exercitationem recusandae pariatur veritatis explicabo culpa temporibus nihil! Itaque iste quisquam quo distinctio tempora maxime porro alias delectus accusantium repudiandae.
        </p>

        <OverviewCard 
          className="mt-4"
          image={trainerImage}
          title="Solid Teams"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem expedita veniam cupiditate animi at ab tenetur quo iusto? Perferendis!"
        />

        <OverviewCard 
          className="mt-4"
          image={workoutImage}
          imageOrder={2}
          title="Leading Culture"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem expedita veniam cupiditate animi at ab tenetur quo iusto? Perferendis!"
        />
      </div>
    </section>
  )
}

export default Overview