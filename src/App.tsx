import "./i18n"

const App = () => {
  return (
    <div className='h-screen w-screen relative'>
      <div className='h-full w-full top-0 left-0 bg-main absolute invert'></div>
      <div className='relative z-[1] h-full w-full'>
        <div className='bg-paper h-[500px] w-[300px]'></div>
      </div>
    </div>
  )
}

export default App
