export interface MainPayloads{
    img_src: string;
    sol: string;
    earth_date: string;
    camera: Camera;
    rover: Rover;
}

interface Camera{
    name: string;
    full_name: string;
}

interface Rover{
    name: string;
    status: string;
}

export interface MainPlay<T>{
    photos: T[];
}

export interface AuthActions{
    username: string;
    password: string;
}

export interface NewsPesponse{
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
}

export interface News<T>{
    data: T
}

export interface MarsPayloads{
    img_src: string;
    sol: string;
    earth_date: string;
    camera: Camera;
    rover: Rover;
}

interface Camers{
    name: string;
    full_name: string;
}

interface Rovers{
    name: string;
    status: string;
}

export interface MarsPlay<T>{
    photos: T[];
}