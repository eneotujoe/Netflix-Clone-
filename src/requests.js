const baseUrl = 'https://api.themoviedb.org/3'
const API_KEY = '68bc76434228327d2f86e69c5d217448'

const requests = {
    fetchNetflixOriginals: `${baseUrl}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `${baseUrl}/trending/tv/day?api_key=${API_KEY}&language=en-US`,
    // fetchTrending: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`,
    fetchPopular: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    fetchHorror: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4`,
}

export default requests;