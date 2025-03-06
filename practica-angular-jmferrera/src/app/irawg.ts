import { Ijuego } from './ijuego';
export interface Irawg {
    count: number;
    next: string | null;
    previous: string | null;
    results: Ijuego[];
}
