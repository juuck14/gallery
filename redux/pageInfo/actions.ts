import { MOVE_PAGE } from './types'

export const movePage= (currentPage: string, title: string) =>{
    return {
        type: MOVE_PAGE,
        payload: {
            currentPage: currentPage,
            title: title
        }
    }
}
