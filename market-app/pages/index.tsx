export default function Home() {
  return (
    <div className="grid gap-5 bg-slate-400 py-20 px-10">
      <div className="mx-auto w-1/2 rounded-2xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className=" text-gray-500">Grey chair</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="my-2 flex justify-between">
          <span className=" text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$90</span>
        </div>
        <div className="mt-5 rounded-xl bg-blue-500 p-3 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl bg-white">
        <div className="flex justify-between bg-blue-500 p-6 pb-14 text-2xl text-white">
          <span className="">Profile</span>
          <span>Cart</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony molly</span>
            <span className="text-small text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl"></div>
    </div>
  );
}
