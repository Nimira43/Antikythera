import Link from 'next/link'
import { PageWrapper } from '@/modules/shared/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
      <h1 className='logo text-3xl text-main'>
        Antikythera
        </h1>
      <Link 
        href='./terminal' 
        className='mt-4 btn btn-main'
      >
        Enter
      </Link>
    </PageWrapper>
  )
}
