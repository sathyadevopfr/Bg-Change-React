import { useState } from 'react';
function App() {

  const [color,setColor] = useState('darkblue')

  return (
    // <h1 className='bg-blue-950 text-3xl text-center p-3' style={{color:'#fff'}}>Hey Whatsapp!</h1>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-96 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          onClick={()=> setColor('black') }
          >
            Black
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={()=> setColor('darkgreen')}
          >
            Dark Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          onClick={()=>setColor('red')}
          >
            light Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
