function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4 placeholder-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6 placeholder-gray-500"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;