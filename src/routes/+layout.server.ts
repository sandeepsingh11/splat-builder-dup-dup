import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    const { username } = locals;
    
    const guestRoutes = [
        {name: 'Login', url: '/login'},
        {name: 'Register', url: '/register'},
    ];
    const authRoutes = [
        {name: '+Gear', url: '/gears/create'},
        {name: '+Gearset', url: '/gearsets/create'},
    ];
    const dropdownRoutes = [
        {name: 'Dashboard', url: '/dashboard'},
        {name: 'Gears', url: '/gears'},
        {name: 'Gearsets', url: '/gearsets'},
    ];
    
    return { 
        username,
        guestRoutes,
        authRoutes,
        dropdownRoutes
    };
}