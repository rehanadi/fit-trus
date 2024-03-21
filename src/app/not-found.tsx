import { sarpanch } from '@/utils/fonts'

const NotFound = () => {
  return (
    <section className={"py-5 px-3"}>
      <div className="container">
        <h2 className={["title text-uppercase", sarpanch.className].join(' ')}>
          Page Not Found
        </h2>
      </div>
    </section>
  )
}

export default NotFound