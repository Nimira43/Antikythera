export function TerminalContent() {

  return (
    <div className='flex justify-center flex-col w-full h-full'>
      <div className='bg-night text-main p-4 terminal border border-doubled border-main w-full'>
        <div className='flex'>
          <div className='border-r border-main pr-4'>
            <div className='border-b mb-2 '>
              Content Filters
            </div>
            <div>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}