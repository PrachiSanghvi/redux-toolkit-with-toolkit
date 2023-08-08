import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from '../features/todo/todoSliceReducer'
const Button = () => {
  const theme = useSelector((state) => state?.theme?.value);
  const dispatch = useDispatch();
  const isDarkMode =  theme?.activeTheme == 'dark';
  const changeThemeMode = () => {
    if (isDarkMode) {
      dispatch(changeTheme('light'))
    } else {
      dispatch(changeTheme('dark'))
    }
  }

  const style = {
    background: isDarkMode ? theme?.dark?.background : theme?.light?.background,
    color: isDarkMode ? theme?.dark?.foreground : theme?.light?.foreground
  };

  return (
    <button style={style} onClick={changeThemeMode} className={`font-bold mx-10 my-10 py-2 px-10 rounded`}>
     {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Button;
