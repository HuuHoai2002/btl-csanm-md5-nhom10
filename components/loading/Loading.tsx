
type Props = {
  title: string
}

const Loading = (props: Props) => {
  return (
    <div title={props.title} className='w-10 h-10 rounded-full border-[3px] border-green-400  border-t-transparent animate-spin'></div>
  )
}

export default Loading