import { NavbarProfile } from "./NavbarProfile"
import { SignoutButton } from "./SignoutButton"
import { ThemeToggleButton } from "./ThemeToggleButton"

export const Navbar = () => {
    return (
        <div className="flex items-center bg-slate-500 p-5">
            <div><NavbarProfile /></div>
            <div className="flex ml-auto space-x-10 items-center">
            <SignoutButton />
            <ThemeToggleButton />
            </div>
        </div>
    )
}