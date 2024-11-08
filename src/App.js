import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
// import apiRequest from "./apiRequest";

function App() {
  const getItem = () => {
    const storedItem = localStorage.getItem("shoppingList");
    return storedItem ? JSON.parse(storedItem) : [];
  };

  const saveItems = (newItems) =>
    localStorage.setItem("shoppingList", JSON.stringify(newItems));

  // const API_URL = `http://localhost:3500/items`;

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems(getItem());
  }, []);
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const updateItems = (items) =>
    items.map((item) => ({ ...item, id: +item.id }));

  // const fetchItems = async () => {
  //   try {
  //     const res = await fetch(API_URL);
  //     if (!res.ok) throw new Error("Did not receive expected data");
  //     const listItems = await res.json();

  //     setItems(updateItems(listItems));
  //     setFetchError(null);
  //   } catch (err) {
  //     setFetchError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => await fetchItems();
  //   setTimeout(() => fetchData(), 2000);
  // }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    saveItems(listItems);

    // const postOptions = {
    //   method: "Post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(myNewItem),
    // };

    // const result = await apiRequest(API_URL, postOptions);
    // if (result) setFetchError(result);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    saveItems(updateItems);

    //   const updateOptions = {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ checked: myItem[0].checked }),
    //   };

    //   const reqUrl = `${API_URL}/${id}`;
    //   const result = await apiRequest(reqUrl, updateOptions);
    //   if (result) setFetchError(result);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    saveItems(listItems);
    // const deleteOptions = { method: "DELETE" };
    // const reqUrl = `${API_URL}/${id}`;
    // const result = await apiRequest(reqUrl, deleteOptions);
    // if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const filterItems = (items, search) => {
    return items.filter((item) =>
      item.item.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="App">
      <Header title="Groceries List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={search} setSearch={setSearch} />

      <main className="main">
        {!items.length ? (
          <p className="heading-p">Your list is empty.</p>
        ) : (
          <Content
            items={filterItems(items, search)}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
