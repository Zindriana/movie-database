import MovieType from "./MovieModel";

type UserType = {
    username: string;
    password: string;
    userMovieList: {
        data: MovieType[],
        status: number,
        success: boolean
    };
};

export default UserType;