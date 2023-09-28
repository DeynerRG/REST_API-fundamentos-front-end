import useContextApp from "../hooks/useContextApp"

function Home() {

  
  const { getApi, putApi, postApi, deleteApi, data, url } = useContextApp();



  

  return (
    <div>
      HomePage
      <div className="flex gap-2">
        <button 
          onClick={ getApi }
          className="block bg-cyan-500 px-2 py-1 rounded-md text-cyan-100 font-semibold">
          GET
        </button>
        <button 
          onClick={ putApi }
          className="block bg-cyan-500 px-2 py-1 rounded-md text-cyan-100 font-semibold">
          PUT
        </button>
        <button 
          onClick={ postApi }
          className="block bg-cyan-500 px-2 py-1 rounded-md text-cyan-100 font-semibold">
          POST
        </button>
        <button 
          onClick={ deleteApi }
          className="block bg-cyan-500 px-2 py-1 rounded-md text-cyan-100 font-semibold">
          DELETE
        </button>
      </div>
      <div className="text-2xl bg-white rounded-md mt-5 p-5 flex gap-4 flex-col">
        <div className="text-cyan-500">
        {
          url
        }
        </div>
        {
          JSON.stringify(data)
        }
      </div>


      
    </div>
  )
}

export default Home