import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <div className="bg-slate-400 py-10 px-10 flex flex-col space-y-10">
    <div className="bg-white p-10 rounded-3xl shadow-2xl">
      <span className="text-3xl font-semibold">Select Item</span>
      <div className="flex justify-between mt-2">
        <span className="font-semibold text-gray-500 ">Grey Chair</span>
        <span className="font-extrabold">$19</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-semibold text-gray-500 ">Grey Chair</span>
        <span className="font-extrabold">$19</span>
      </div>
      <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
        <sapn className="font-semibold ">Total</sapn>
        <sapn className="font-extrabold">$10</sapn>
      </div>
      <div className="bg-blue-500 text-center w-1/2 mx-auto mt-4 py-3 rounded-xl">
        <span className="font-semibold text-white">Checkout</span>
      </div>
    </div>
    <div className="bg-white overflow-hidden rounded-3xl shadow-2xl">
      <div className='bg-blue-500 p-6 pb-14'>
        <span className='font-semibold text-white'>Profile</span>
      </div>
      <div className='flex justify-between rounded-xl relative -mt-5 bg-white'>
        <div className='flex flex-col items-center p-3 pl-4'>
          <span className='text-gray-600 text-sm font-medium'>Orders</span>
          <span className='font-bold '>340</span>
        </div>
        <div className='w-24 h-24 bg-red-500 rounded-full -mt-10'/>
        <div className='flex flex-col items-center p-3 pr-4'>
          <span className='text-gray-600 text-sm font-medium'>Spent</span>
          <span className='font-bold '>$340</span>
        </div>
      </div>
      <div className='flex flex-col items-center mt-2 mb-5'>
        <span className="font-semibold">Tony Molloy</span>
        <span className='text-sm'>US State</span>
      </div>
    </div>
    <div className="bg-white p-10 rounded-3xl shadow-2xl"></div>
    <div className="bg-white p-10 rounded-3xl shadow-2xl"></div>
  </div>
};

export default Home;

