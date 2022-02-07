import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5">
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
    <div className="bg-white p-10 rounded-3xl"></div>
    <div className="bg-white p-10 rounded-3xl"></div>
    <div className="bg-white p-10 rounded-3xl"></div>
  </div>
};

export default Home;
