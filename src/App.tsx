import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/cardList/cardList.component";
import SearchBox from "./components/searchBox/searchBox.components";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  console.log("render");

  useEffect(() => {
  
  const fetchUsers = async () => {
    const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
    setMonsters(users);
  }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  function onSearchChange(event: ChangeEvent<HTMLInputElement>) : void {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters.."
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
