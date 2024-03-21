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
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem expedita veniam cupiditate animi at ab tenetur quo iusto? Perferendis!"
          isShowLink={false}
        />
      </div>
    </section>
  )
}

export default Culture