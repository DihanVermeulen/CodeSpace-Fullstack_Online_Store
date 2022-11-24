import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";

export const Register: React.FC = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-xl lg:text-2xl font-bold">Create account</h1>
            <p>Or <a className="text-cyan-300" href='/login'>Go to login</a></p>
            <form className="lg:w-1/3" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm">
                    <div className="mb-4">
                        <label htmlFor="email-address" className="sr-only">
                            Name
                        </label>
                        <Input
                            variant="outlined"
                            id="name"
                            name="name"
                            type="text"
                            required
                            label="Name"
                            className="sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="surname" className="sr-only">
                            Surname
                        </label>
                        <Input
                            variant="outlined"
                            id="surname"
                            name="surname"
                            type="text"
                            required
                            label="Surname"
                            className="sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <Input
                            variant="outlined"
                            id="email"
                            name="email"
                            type="text"
                            required
                            label="Email"
                            className="sm:text-sm" />
                    </div>
                    <div className="mb-10">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <Input
                            variant="outlined"
                            id="password"
                            name="password"
                            type="password"
                            required
                            label="Password"
                            className="sm:text-sm" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-cyan-300">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-400 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}