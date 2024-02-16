import './App.css';
import DestinationCard from './components/DestinationCard';
import DestinationCardData from './datas/popularDestinationLists';
import { FaHome } from "react-icons/fa";
function App() {

  return (
    <>
      <div className="lg:grid grid-cols-2 items-center bg-gray-100">
    <div className="p-8 space-y-6 max-w-md mx-auto sm:max-w-xl sm:space-y-8">
      <div className="flex justify-start items-center">
        <div className="text-4xl text-fuchsia-600 flex items-center">
          <i className="fa-solid fa-house-laptop"></i>
        </div>
        <p className="mx-1 text-2xl font-bold"><FaHome className='text-fuchsia-600 text-4xl'/>Work<span className="text-fuchsia-600">cation</span></p>
      </div>
        <img className="rounded-lg shadow-lg h-64 w-96 sm:min-w-full sm:h-72 object-cover lg:hidden" src="img/smiling-man-using-laptop-near-bed_23-2147769465.jpg" alt="working at home" />
      <div>
        <h1 className="text-[28px] font-bold sm:text-4xl">You can work from anywere. <span className="text-fuchsia-600">Take advantage of it.</span></h1>
        <p className="mt-2 text-gray-600 sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae iste consequuntur dolorum temporibus eius itaque, vel adipisci doloremque. Ea adipisci unde neque dolores!</p>
      </div>
      <div className="space-x-2">
        <a className="btn btn-primary hover:-translate-y-0.5 transform" href="#j">Book your escape</a>
        <a className="btn btn-secondary" href="#d">learn more</a>
      </div>
    </div>
    <div>
      <img className="hidden lg:block h-[600px] w-full rounded-lg object-cover" src="img/smiling-man-using-laptop-near-bed_23-2147769465.jpg" alt="working at home" />
    </div>
  </div>
  
  <div className='bg-slate-300 px-3 sm:px-24 pb-10'>
      <div className='py-10'>
        <h1 className='text-3xl font-semibold mb-3'>Popular Destinations</h1>
        <p>A selection of great work-friendly cities with lots to seeand explore.</p>
      </div>
      <div className='grid grid-rows-6 grid-cols-1 lg:grid-rows-4 lg:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 gap-5'>
      {DestinationCardData.map((dataList) => (
      <DestinationCard dataList={dataList} key={dataList.city} />
      ))}
     </div>
  </div>
  
    
    </>
  )
}

export default App
