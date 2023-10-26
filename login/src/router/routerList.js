import Settings from "../pages/settings"
import Categories from "../pages/categories"
import Products from "../pages/products"
import Users from "../pages/users"


export const routerList = {
    guest: { LOGIN: '/', GUSET_COMPONENT: '/'},
    auth: {
        ADMIN: '/admin',
        sidebar: {
            USERS: '/users',
            PRODUCTS: '/products',
            CATEGORIES: '/categories',
            SETTINGS: '/settings'
        }
    }
}



export const sideBar = [
    {
        path: routerList.auth.sidebar.USERS,
        component: <Users/>,
        title: 'Users'
    },
    {
        path: routerList.auth.sidebar.PRODUCTS,
        component: <Products/>,
        title: 'Products'
    },
    {
        path: routerList.auth.sidebar.CATEGORIES,
        component: <Categories/>,
        title: 'Categories'
    },
    {
        path: routerList.auth.sidebar.SETTINGS,
        component: <Settings/>,
        title: 'Settings'
    },
]