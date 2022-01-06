function App() {
  return (
    <div className="h-screen bg-rose-800 flex justify-center items-center flex-col text-center">

      <h2 className="bg-white my-20 rounded text-rose-700 px-6 py-2 text-2xl font-bold opacity-60">create-react-app template</h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <a className="my-6 md:my-0" target="_blank" href="https://reactjs.org/">
          <span className="mx-5 bg-blue-400 py-2 px-4 rounded-3xl opacity-70 font-bold shadow-blue-700/50 shadow-md hover:shadow-none hover:bg-blue-700 hover:text-cyan-300 duration-300">ReactJs</span>
        </a>
        <a className="my-6 md:my-0" target="_blank" href="https://tailwindcss.com/">
          <span className="mx-5 bg-blue-400 py-2 px-4 rounded-3xl opacity-70 font-bold shadow-blue-700/50 shadow-md hover:shadow-none hover:bg-blue-700 hover:text-cyan-300 duration-300">Tailwindcss</span>
        </a>
        <a className="my-6 md:my-0" target="_blank" href="https://www.typescriptlang.org/">
          <span className="mx-5 bg-blue-400 py-2 px-4 rounded-3xl opacity-70 font-bold shadow-blue-700/50 shadow-md hover:shadow-none hover:bg-blue-700 hover:text-cyan-300 duration-300">Typescript</span>
        </a>
      </div>

      <p className="text-white mt-14">Start by editing src/App.tsx</p>
    </div>
  );
}

export default App;
