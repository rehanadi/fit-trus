import { sarpanch } from "@/utils/fonts"
import TeamsCard from "@/components/TeamsCard"

type Props = {
  className?: string
}

const cardClassNames = [
  "me-md-2",
  "ms-md-2 mx-lg-2",
  "me-md-2 ms-lg-2"
]

const cardTitles = [
  "CEO",
  "Head of Marketing",
  "Head of Trainer"
]

const fetchTeams = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=3&nat=us")
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
}

const Teams = async ({ className = '' }: Props) => {
  const teams = await fetchTeams()

  return (
    <section className={["teams py-5 px-3", className].join(" ")}>
      <div className="container d-flex flex-column row-gap-4">
        <h2 className={["title text-uppercase", sarpanch.className].join(' ')}>
          <span>Meet</span> Our Teams
        </h2>

        <div className="row mt-4 row-gap-4">
          {teams?.map((team: any, index: number) => (
            <div className="col col-12 col-md-6 col-lg-4" key={index}>
              <TeamsCard 
                name={`${team.name.first} ${team.name.last}`}
                image={team.picture.large}
                title={cardTitles[index] || ""}
                phone={team.phone}
                className={cardClassNames[index] || ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams