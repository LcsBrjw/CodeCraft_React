import {LoginModal} from "./LoginModal";
import { UserPanel } from "./UserPanel";


export function LateralOverlay({onClose}) {
  return (
    <div className="fixed top-[70px] right-0 lg:right-[10%] w-full sm:w-[320px] h-auto z-50 md:rounded-bl-lg">
        <LoginModal onClose={onClose} />
        <UserPanel />

    </div>
          

  )
}