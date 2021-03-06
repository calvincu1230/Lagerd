export const login = user => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user }
    });
}; 
// sends request to session api to set a current user

export const logout = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE"
    });
};
// sends request to session api to clear current user

export const signup = user => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: { user }
    });
};

// sends request to user api to add a user to DB and log them in

export const loginDemoUser = () => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user: { username: "tommy", password: "hunter2" } }
    });
}; 