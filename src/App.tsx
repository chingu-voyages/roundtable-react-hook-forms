import { useForm } from "react-hook-form"
import { Credentials, credentialsSchema } from "./types/credentials"
import { zodResolver } from "@hookform/resolvers/zod"
import { DevTool } from "@hookform/devtools"

function App() {
     const { register, handleSubmit, control, formState: { errors } } = useForm<Credentials>(
          {
               defaultValues: {
                    email: "",
                    password: ""
               },
               resolver: zodResolver(credentialsSchema)
          },
     )

     function submit(data: Credentials) {
          console.log("Email: ", data.email)
          console.log(data)
     }

     return (
          <div className='flex flex-col w-1/2 mx-auto h-screen justify-center'>
               <form className='flex flex-col' onSubmit={handleSubmit(submit)}>
                    <div className="mb-4">
                         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                              Email
                         </label>
                         <input
                              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${errors.email ? "border-red-500" : ""}`}
                              id="email"
                              type="text"
                              placeholder="Email"
                              {...register("email")}
                              data-testid="email-text"
                         />
                         {errors.email && <p className="text-red-500 text-xs italic" data-testid="email-error">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                              Password
                         </label>
                         <input
                              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
                              id="password"
                              type="password"
                              placeholder="Password"
                              {...register("password")}
                              data-testid="password-text"
                         />
                         {errors.password && <p className="text-red-500 text-xs italic" data-testid="password-error">{errors.password.message}</p>}
                    </div>

                    <div>
                         <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="submit"
                              data-testid="submit-btn"
                         >
                              Sign In
                         </button>
                    </div>
               </form>
               <DevTool control={control} />
          </div>
     )
}

export default App
