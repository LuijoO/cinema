import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export default function Search() {
  const query = useQuery();
  const search = query.get('search');

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  }
// CONTROLAR EL VALOR DE UN INPUT
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" 
        value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={18}/>
        </button>
      </div>
    </form>
  )
}

export { Search };
