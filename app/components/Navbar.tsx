import { NavbarProfile } from "./NavbarProfile";
import { SignoutButton } from "./SignoutButton";
import { ThemeToggleButton } from "./ThemeToggleButton";

export const Navbar = () => {
  return (
    <div className="flex items-center dark:bg-indigo-800 bg-indigo-300 p-5 sticky top-0 z-50">
      <div>
        <NavbarProfile />
      </div>
      <div className="flex ml-auto space-x-10 items-center">
        <SignoutButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
};
