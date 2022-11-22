import "./searchBox.styles.css";
import { ChangeEvent } from "react"; // ChangeEventHandler,

// interface ISearchBoxProps extends IChangeHandlerProps{
//   className: string;
//   placeholder?: string;
// }

// interface IChangeHandlerProps{
//   onChangeHandler: (a:string) => void
// }

// interface ISearchBoxProps{
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps{
//   onChangeHandler: (a:string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // func: ChangeEventHandler;
  onChangeHandler:(event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps ) => (
  <input
    className={`searchBox ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler} // (e)=>onChangeHandler(e)
  />
);

export default SearchBox;
