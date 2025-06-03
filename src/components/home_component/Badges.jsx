const Badges = () => {
  return (
    <div className= "bg-[#f4f4f6] p-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Our Badges</h1>
      <p className="text-lg text-gray-700 mb-8">
        We take pride in our achievements and the trust we have built with our users.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
          <h2 className="font-semibold text-xl mb-2">Trusted Platform</h2>
          <p>Over 1 million users trust us with their financial needs.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
          <h2 className="font-semibold text-xl mb-2">Fast Approval</h2>
          <p>Loans approved in under 24 hours.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-64 text-center">
          <h2 className="font-semibold text-xl mb-2">Secure Transactions</h2>
          <p>Your data is protected with top-notch security measures.</p>
        </div>
      </div>
      
    </div>
  );
}
export default Badges;