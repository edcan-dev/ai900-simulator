import { logoutAction } from "@/actions/auth/logout";
import { IoExit } from "react-icons/io5";

export const LogoutButton = () => {
  return (
    <button className="p-0 cursor-pointer" onClick={() => logoutAction()}>
      <IoExit size={50} className="text-foreground-secondary"/>
    </button>
  )
}
