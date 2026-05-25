// Export a constant object named ROUTER so it can be used in other files.
export const ROUTER = {
    USER: { //nested object that contains routes related to users.
        HOME: "/",
        PROFILE: "/profile",
        LOGIN: "/login",
        REGISTER: "/register",
    },
    ADMIN: {
        DASHBOARD: "/admin/dashboard",
    },
}