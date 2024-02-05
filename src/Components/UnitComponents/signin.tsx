function Signin() {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        className="rounded-full w-[13rem]"
        src="./src/assets/user.png"
        alt="usericon"
      />
      <span className="text-2xl font-bold">Visitor</span>
      <div className="mt-6">
        <input
          className="font-bold border-0 focus:border-b-2 focus:border-blue-600 p-2 bg-stone-800 rounded-sm h-[2rem] outline-none w-[320px]"
          placeholder="Enter Anything"
          type="password"
        />
      </div>
      <button className="p-2 px-6 bg-blue-600 rounded">Sign In</button>
    </div>
  );
}

export default Signin;
