const VideoTitle = ({title,overview}) => {
  return (
    <div className="h-screen absolute py-56 px-20 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl my-4 font-black">{title}</h1>
      <p className="w-1/2">{overview}</p>
      <div className="my-3">
        <button className="bg-neutral-400 py-2 px-6 rounded-md cursor-pointer text-white">Play</button>
        <button className="bg-neutral-400 py-2 px-6 rounded-md cursor-pointer text-white mx-2">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle