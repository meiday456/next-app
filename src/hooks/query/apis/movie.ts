import ApiUtils from "@/utils/ApiUtils";


export const getMovieNow = async()=>{
    const {data} = await ApiUtils.get("/movie/now_playing")
    return data
}

export const getMovieDetail = async(id:number)=>{
    const {data} = await ApiUtils.get(`/movie/${id}`)
    return data
}