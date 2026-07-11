import { PageWrapper } from './modules/shared/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
      <h1>Welcome to Antikythera</h1>
      <button className='mt-4 btn btn-dark'>
        Enter
      </button>
    </PageWrapper>
  )
}