const load = async ({ locals }) => {
  const { username } = locals;
  const guestRoutes = [
    { name: "Login", url: "/login" },
    { name: "Register", url: "/register" }
  ];
  const authRoutes = [
    { name: "+Gear", url: "/gears/build" },
    { name: "+Loadout", url: "/loadouts/build" }
  ];
  const dropdownRoutes = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Gears", url: "/gears" },
    { name: "Loadouts", url: "/loadouts" },
    { name: "Logout", url: "/logout" }
  ];
  return {
    username,
    guestRoutes,
    authRoutes,
    dropdownRoutes
  };
};
export {
  load
};
