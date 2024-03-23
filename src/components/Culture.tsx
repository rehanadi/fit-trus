import OverviewCard from "@/components/OverviewCard"
import workoutImage from '@/assets/images/workout.png'

const Culture = () => {
  return (
    <section className="overview py-5 px-3">
      <div className="container d-flex flex-column row-gap-4">
        <OverviewCard 
          className="mt-4"
          image={workoutImage}
          imageOrder={2}
          title="Leading Culture"
          paragraph="Fit Trus is a leading chain of fitness centers dedicated to promoting health, wellness, and active lifestyles. Fit Trus has grown from a single location to a nationwide network of state-of-the-art facilities."
          isShowLink={false}
        />
      </div>
    </section>
  )
}

export default Culture