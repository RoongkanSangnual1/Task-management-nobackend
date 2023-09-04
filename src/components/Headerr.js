import "./Headerr.css"
import { FaSun,FaMoon } from "react-icons/fa";
export default function Headerr(props){
    const {theme,seTheme}= props;

    function ToggleTheme(){
        if(theme==="light"){
            seTheme("dark")
        }
        else{
            seTheme("light")
        }
    }

    return(
        <header>
            <div className="logo">
                <span> Task management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "โหมดกลางวัน":"โหมดกลางคืน"} </span>
                <span className="icon" onClick={ToggleTheme}>{theme==="light" ? <FaSun/>: <FaMoon/>}</span>

            </div>
        </header>
    )
}