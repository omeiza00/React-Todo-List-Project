import { MoonIcon, SunIcon } from "@phosphor-icons/react";

function ThemeBtn({onToggle, isDarkMode}) {
  return (
    <div>
        <button onClick={onToggle}>
            {isDarkMode ? <SunIcon size={32} weight="fill" /> : <MoonIcon size={32} weight="fill" />}
        </button>
    </div>
  )
}   

export default ThemeBtn