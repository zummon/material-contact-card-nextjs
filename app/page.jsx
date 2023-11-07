import translates from './translates.json'

export async function generateMetadata({  }) {
  return {
    title: translates[''].title,
  	description: translates['']['goal-detail'],
  }
}

export default function Home() {
  return (
    <>
      
		</>
  )
}
