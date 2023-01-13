import { TActivity } from './Activity'
export type GetActivityResponse = {
    data: TActivity[],
    id: string,
    year: string
} | null