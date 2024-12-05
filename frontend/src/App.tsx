
import { useState } from "react"
import UserProfile from "./userProfile/UserProfile";


function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [search, setUserName] = useState<string>('')


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

  };

  const handleClick = () => {
    setUserName(inputValue)
    console.log(search)
  }

  return (
    <>

      <div>
        <h1>Hellow world</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClick}>Pesquisar</button>
        <UserProfile searchedUser={search} />

      </div>

    </>
  )
}

export default App