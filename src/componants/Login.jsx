import React, { useState } from 'react'
import z from "zod"

const loginSchema = z.object({
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(6, "Password must be 6 charecters"),
})

function Login() {
    const [formdata, setformdata] = useState({
        email: "",
        password: ""
    })
    const [error, seterror] = useState({})
    function onChangeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setformdata({ ...formdata, [name]: value })
    }

    function onsubmitHandler(e) {
        e.preventDefault();
        const result = loginSchema.safeParse(formdata)
        if (!result.success) {
            const errorField = result.error.formErrors.fieldErrors;
            seterror(errorField)
            return
        }
        alert("form data submitted");
        // console.log("email", formdata.email);
        // console.log("password", formdata.password);
        setformdata({ email: "", password: "" });
    }
    // console.log(error)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg border border-gray-200 p-8 rounded-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>
                <form onSubmit={onsubmitHandler} className="flex flex-col gap-4">
                    <input
                        onChange={onChangeHandler}
                        value={formdata.email}
                        name="email"
                       
                        placeholder="Enter your email"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className='text-xs text-red-400'>{error && error.email}</span>
                    <input
                        onChange={onChangeHandler}
                        value={formdata.password}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                   <span className='text-xs text-red-400'>{error && error.password}</span>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
