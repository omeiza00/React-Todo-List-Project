import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import '../styles/ThemeBtn.css'

function ThemeBtn({onToggle, isDarkMode}) {
  return (
    <div>
        <button onClick={onToggle} className="theme-btn">
            {isDarkMode ? <SunIcon className="sun-icon" size={40} weight="fill" /> : <MoonIcon className="moon-icon" size={40} weight="fill" />}
        </button>
    </div>
  )
}   

export default ThemeBtn