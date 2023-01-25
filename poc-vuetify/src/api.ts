import axios from 'axios'

export const allMovies = async (): Promise<Movie[]> =>
  await axios.get<HalResponse>('http://localhost:8080/movies')
    .then(axiosResponse => axiosResponse.data._embedded.movies)

export interface Movie {
  title: string
  released: Date
  duration: string
  actors: string[]
}

interface HalResponse {

  _embedded: {
    movies: HalMovie[]
  }
  _links: {
    self: {
      href: string
    }
    profile: {
      href: string
    }
  }
  page: HalPage
}


interface HalMovie extends Movie {
  _links: {
    self: {
      href: string
    },
    movie: {
      "href": string
    }
  }
}

interface HalPage {
  size: number
  totalElements: number
  totalPages: number
  number: number
}
