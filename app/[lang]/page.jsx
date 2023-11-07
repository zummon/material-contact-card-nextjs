import translates from '../translates.json'

export async function generateMetadata({ params }) {
  const lang = params.lang
  const translate = translates[lang] || {}

  return {
    title: translate.title,
  	description: translate["goal-detail"],
  }
}

export default function Page() {
  return (
    <>
      
		</>
  )
}
