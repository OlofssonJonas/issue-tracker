
import dynamic from 'next/dynamic'
import IssueFormSkeleton from '../_compontents/IssueFormSkeleton'

const IssueForm = dynamic(
  ()=> import('@/app/issues/_compontents/IssueForm'),
  { ssr: false,
  loading: () => <IssueFormSkeleton /> })


const page = () => {
  return (
    <IssueForm />
  )
}

export default page