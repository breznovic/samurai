const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: 'https://i.ytimg.com/vi/r6ZNqjI1ZzA/maxresdefault.jpg', followed: false, fullName: 'Joe', status: 'I am busy',
        //     location: { city: 'Washington', country: 'USA' }
        // },
        // {
        //     id: 2, photoUrl: 'https://m.media-amazon.com/images/I/71UGKlMwN1L._SS500_.jpg', followed: true, fullName: 'Frank', status: 'For the glory!',
        //     location: { city: 'Arlen', country: 'USA' }
        // },
        // {
        //     id: 3, photoUrl: 'https://img.archiexpo.com.ru/images_ae/photo-g/53521-8692765.jpg', followed: false, fullName: 'Thorvald', status: 'Trolls are good!',
        //     location: { city: 'Trollborg', country: 'Norway' }
        // },
        // {
        //     id: 4, photoUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/17/fc/b6/3c/ready-gooo.jpg', followed: true, fullName: 'Snorry', status: 'To the North!',
        //     location: { city: 'Iceberg', country: 'Iceland' }
        // }
    ]

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {
                ...state, users: [ ...action.users ]
            }
        }

        default: return state

        }

}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
