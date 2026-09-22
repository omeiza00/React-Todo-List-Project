import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import '../styles/ThemeBtn.css'

function ThemeBtn({onToggle, isDarkMode}) {
  return (
    <div>
        <button onClick={onToggle} className="theme-btn">
            {isDarkMode ? <SunIcon size={40} weight="fill" /> : <MoonIcon size={40} weight="fill" />}
        </button>
    </div>
  )
}   

export default ThemeBtn