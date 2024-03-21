import About from '@/components/About'
import Culture from '@/components/Culture'
import Teams from '@/components/Teams'

const AboutPage = () => {
  return (
    <>
      <About />
      <Teams className="pt-3 pb-0" />
      <Culture />
    </>
  )
}

export default AboutPage