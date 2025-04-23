export default function Footer() {
    return (
        <div className="border mb-3 xl:grid xl:grid-cols-3 xl:gap-8 bg-[#f2f4dd] pt-10 px-8 max-w-screen-2xl mx-auto">
        <div className="mt-10 xl:mt-0">
          <p className="text-sm font-semibold leading-6 text-black">Subscribe to our newsletter</p>
          <p className="mt-2 text-sm leading-6 text-gray-800">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="mt-6 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email-address"
              autoComplete="email"
              required
              className="min-w-0 appearance-none border-0 ring-1 ring-inset ring-white/10 placeholder:text-gray-500 
              focus:ring-2 focus:ring-inset focus:ring-black focus:outline-none w-full rounded-md bg-gray-50 
              px-3 py-1.5 text-base text-black shadow-sm sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              id="email-address"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                style={{ fontFamily: "Arial" }}
                className="flex hover:bg-black focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-black w-full items-center justify-center 
                rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      
        {/* Grid links */}
        <div className="mt-10 xl:mt-0 xl:col-span-2 grid grid-cols-2 gap-8 mb-6">
          {/* Column 1 */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <p className="text-sm font-semibold leading-6 text-black">Explore</p>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Marketing</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Analytics</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Commerce</a></li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <p className="text-sm font-semibold leading-6 text-black">Support</p>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Pricing</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Guides</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Mission and Values</a></li>
              </ul>
            </div>
          </div>
      
          {/* Column 2 */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <p className="text-sm font-semibold leading-6 text-black">Company</p>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">About</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Blog</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Team</a></li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <p className="text-sm font-semibold leading-6 text-black">Legal</p>
              <ul className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Claim</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Privacy</a></li>
                <li><a href="#" className="text-sm leading-6 text-gray-800 hover:text-black">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    );
  }
  