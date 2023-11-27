import { ChangeEvent, FormEvent, useState } from "react"
import { Credentials } from "./types/credentials"
import { EmailValidator } from "./utils/emailValidator"

function App() {
     const [user, setUser] = useState<Credentials>({
          email: "",
          password: "",
     })

     const [emailError, setEmailError] = useState<string | null>(null)
     const [passowrdError, setPassowrdError] = useState<string | null>(null)

     function handleSubmit(e: FormEvent) {
          e.preventDefault()
          setEmailError(null)
          setPassowrdError(null)
          let hasError = false

          if (!EmailValidator(user.email)) {
               setEmailError("Invalid email")
               hasError = true
          }

          if (!user.password) {
               setPassowrdError("Password is required")
               hasError = true
          }

          if (hasError) {
               return
          }

          console.log(user)
     }

     function handleChange(e: ChangeEvent<HTMLInputElement>) {
          setUser({ ...user, [e.target.id]: e.target.value })
     }

     return (
          <div className='flex flex-col w-1/2 mx-auto h-screen justify-center'>
               <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className="mb-4">
                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              Email
                         </label>
                         <input
                              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailError ? "border-red-500" : "border-gray-300"}`}
                              id="email"
                              type="text"
                              placeholder="Email"
                              value={user.email}
                              onChange={handleChange}
                         />
                         {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                    </div>

                    <div className="mb-4">
                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                              Password
                         </label>
                         <input
                              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passowrdError ? "border-red-500" : "border-gray-300"}`}
                              id="password"
                              type="password"
                              placeholder="Password"
                              value={user.password}
                              onChange={handleChange}
                         />
                         {passowrdError && <p className="text-red-500 text-xs italic">{passowrdError}</p>}
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
