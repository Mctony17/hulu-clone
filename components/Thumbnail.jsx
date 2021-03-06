import Image from "next/image";

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="border text-base border-opacity-10 rounded-lg overflow-hidden m-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}` }
                width={1920}
                height={1080}
            />
            <div className="p-4">
                <p className="text-xl text-white whitespace-nowrap truncate transition-all duration-100 ease-in-out group-hover:font-semibold">
                    {result.title || result.original_title}
                </p>
                <p className="truncate mt-2">{result.overview}</p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type}.`}{" "}
                    {result.release_date || result.first_air_date} .{" "}
                    {/* <ThumbUpIcon className="h-5 mx-2" /> */}
                    {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
