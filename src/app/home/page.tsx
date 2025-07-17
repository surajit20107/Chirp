import Header from "@/components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <hr className="mt-6 text-gray-300" />
      {/* all posts */}
      <div className="my-4 px-2">
        <div className="flex items-center gap-2">
          <img src="defaultProfile.webp" className="h-7 w-7 rounded-full object-cover" />
          <h3>Surajit</h3>
        </div>
        <p className="mt-2 md:px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        </p>
        <img src="https://placehold.co/600x400" alt="placeholder" className="p-2 rounded-md mx-auto md:mt-4" />
      </div>
      

      <div className="my-4 px-2">
        <div className="flex items-center gap-2">
          <img src="defaultProfile.webp" className="h-7 w-7 rounded-full object-cover" />
          <h3>Surajit</h3>
        </div>
        <p className="mt-2 md:px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        </p>
        <img src="https://placehold.co/600x400" alt="placeholder" className="p-2 rounded-md mx-auto md:mt-4" />
      </div>
    </div>
  )
}