import MovieType from "./MovieModel";

type UserType = {
    username: string;
    password: string;
    userMovieList: MovieType[];
};

export default UserType;