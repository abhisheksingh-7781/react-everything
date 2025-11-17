import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <nav
      className="h-20 bg-teal-300 p-10 text-3xl font-bold text-pink-100  
    w-full flex justify-center items-center gap-10"
    >
      <NavLink to="/">Home</NavLink>

      {user ? (
        <>
          {user && user?.isAdmin && (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          )}

          <NavLink to="/admin/user-profile">Settings</NavLink>
          <NavLink to="/cart">cart</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
