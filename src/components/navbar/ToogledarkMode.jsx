
import logo1 from "../../assets/images/moon.svg";


const ToogleDarkMode = ({ theme, setTheme }) => {

    const handleClick = () => {
        setTheme((theme) => {
            return theme === 'dark' ? setTheme("light") : "dark"
        })
    }

    return (
        <div className='flex fixed top-[0px] z-[9999] right-0 items-end justify-end mt-2 mr-2'>
            <div className={`w-14 h-7 flex dark:justify-end  dark:bg-primary-700 bg-slate-300 rounded-full transition duration-1000 `}
                onClick={handleClick}>
                <img src={logo1} />
            </div>
        </div>
    )
}

export default ToogleDarkMode;