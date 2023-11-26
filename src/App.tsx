import { FormEvent } from "react"

function App() {
     function handleSubmit(e: FormEvent) {
          e.preventDefault()
     }

     return (
          <div className='flex flex-col w-1/2 mx-auto h-screen justify-center'>
               <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className="mb-4">
                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              Email
                         </label>
                         <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="email"
                              type="email"
                              placeholder="Email"
                         />
                    </div>

                    <div className="mb-4">
                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                              Password
                         </label>
                         <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="password"
                              type="password"
                              placeholder="Password"
                         />
                    </div>

                    <div>
                         <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="submit"
                         >
                              Sign In
                         </button>
                    </div>
               </form>
          </div>
     )
}

export default App
