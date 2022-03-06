import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-5">
      <div className="bg-white p-10 rounded-xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-3">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-3">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="">Total</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
          <span>Checkout</span>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-600 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-xl bg-white relative -top-14">
          <div className="">
            <div className="">
              <span>Orders</span>
              <span>340</span>
            </div>
            <div className="">프로필사진</div>
            <div className="">
              <span>Spent</span>
              <span>340</span>
            </div>
          </div>
          <div className="">
            <span>Tony Molly</span>
            <span>미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-xl shadow-xl"></div>
    </div>
  );
};

export default Home;
