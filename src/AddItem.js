import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label className="addForm__label" htmlFor="addItem">
        AddItem
      </label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        className="addForm__input"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        type="submit"
        className="addForm__button"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus className="svg addForm--svg" />
      </button>
    </form>
  );
};

export default AddItem;
