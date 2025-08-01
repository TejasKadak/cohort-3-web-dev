import './App.css'

function App() {
 

  return (
    <div className='min-h-screen flex flex-col bg-blue-950 '>
      <div className='flex justify-center pt-20 pb-10 text-xl text-white'>
       <span className='text-blue-200'>Webinar</span>.gg
      </div>

      <div className='text-center text-xl text-white'>
        Verify your age 
      </div>


      <div className='w-full flex flex-col justify-center p-10 text-center'>
        <p className='text-gray-50 text-sm m-2 '>Please confirm your birth year. This will not be stored</p>
        <input className=' text-center py-2 px-2 w-60 border-none mx-auto mb-5 mt-5 rounded bg-white' type="text" placeholder='Your birth year'/>
        <button className='bg-gray-500 p-2  w-60 mx-auto mb-5 mt-1 rounded text-white'>Continue</button>
      </div>
    </div>
  )
}

export default App
