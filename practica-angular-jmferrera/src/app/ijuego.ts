import { Iplataforma } from "./iplataforma";
export interface Ijuego {
    id: number;
    name: string;
    rating: number;
    released: string;
    background_image: string;
    platforms: Iplataforma[];
}
