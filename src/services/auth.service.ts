export const isLoggedIn = () => {
    return sessionStorage.getItem('access_token') ? true : false
}

export const userRole = () => {
    return sessionStorage.getItem('roles')
}

export const clearSession = () => {
    return sessionStorage.clear()
}