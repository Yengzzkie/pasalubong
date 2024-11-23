import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="bg-[#070707] flex flex-col lg:flex-row items-center justify-evenly lg:h-[80vh] w-screen">
      {/* First Section */}
      <div className="border w-full lg:w-[50%] h-[25vh] lg:h-full">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1536489885071-87983c3e2859?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First Section Image"
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-wrap w-full h-full">
        <div className="w-1/2">
          <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1445979323117-80453f573b71?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-center text-white text-lg lg:text-4xl text-wrap">View Full Menu</h1>
          <Link to="/" className="text-white tracking-wider pb-1 border-b-2 border-[var(--secondary)] mt-4 mx-auto lg:mx-0">CLICK HERE</Link>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-center text-white text-lg lg:text-4xl  text-wrap">Breakfast Menu</h1>
          <Link to="/" className="text-white tracking-wider pb-1 border-b-2 border-[var(--secondary)] mt-4 mx-auto lg:mx-0">CLICK HERE</Link>
        </div>
        <div className="w-1/2">
          <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1658713064117-51f51ecfaf69?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>

      {/* Last Section */}
      <div className="border w-full lg:w-[50%] h-[25vh] lg:h-full">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1534596382981-1974b10d4e1a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Last Section Image"
        />
      </div>
    </div>
  );
}
