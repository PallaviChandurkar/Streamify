const VideoTitle = ({title,overview}) => {
  return (
    <div className=" md:h-screen absolute py-40 px-5 md:py-56 md:px-20 text-white bg-gradient-to-r from-black z-0">
      <h1 className="text-2xl md:text-4xl my-4 font-black">{title}</h1>
      <p className="w-1/2 hidden lg:block">{overview}</p>
      <div className="my-3">
        <button className="bg-neutral-400 py-1 md:py-2 px-2 md:px-6 rounded-md cursor-pointer text-white">Play</button>
        <button className="bg-neutral-400 py-1 md:py-2 px-3 md:px-6 rounded-md cursor-pointer text-white mx-2">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle