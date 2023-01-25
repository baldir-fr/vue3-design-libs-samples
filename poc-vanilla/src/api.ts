import axios from 'axios'

export const allMovies = async (): Promise<Movie[]> =>
    await axios.get<HalResponse>("http://localhost:8080/movies")
        .then(axiosResponse => axiosResponse.data._embedded.movies)

export interface Movie {
    title: String
    released: Date
    "duration": String
    "actors": String[]
}

interface HalResponse {

    _embedded: {
        movies: HalMovie[]
    }
    _links: {
        self: {
            href: String
        }
        profile: {
            href: String
        }
    }
    page: HalPage
}


interface HalMovie extends Movie {
    _links: {
        self: {
            href: String
        },
        movie: {
            "href": String
        }
    }
}

interface HalPage {
    size: number
    totalElements: number
    totalPages: number
    number: number
}
