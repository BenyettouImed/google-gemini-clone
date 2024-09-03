
import Sidebar from './Sidebar';
import Nav from './Nav';
import Hero from './Hero';
import Input from './Input';
function App() {

  
  return (
    <main className='flex flex-row min-h-screen '>
      <Sidebar  />
      <div className='flex flex-col w-full overflow-y-scroll no-scroll'>
        <Nav/>
        <div className='flex justify-between  min-h-[calc(100vh-64px)] flex-col  items-center py-6 px-32'>
          <div className=''>
            <Hero/>
          </div>
          
          
          <div className='flex flex-col items-center w-full '>
            
              <Input className='w-3/4 '/>
              <small className='hidden md:text-slate-500 md:font-medium'>Gemini may display inaccurate info, including about people, so double-check its responses.</small>
            
            
          </div>
          
        </div>
        
      </div>
      
    </main>
  );
}

export default App;
