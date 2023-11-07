import translates from '../translates.json'

export async function generateMetadata({ params }) {
  return {
    title: translates[params.lang].title,
  	description: translates[params.lang]["goal-detail"],
  }
}

export default function Page() {
  return (
    <>
      
		</>
  )
}
