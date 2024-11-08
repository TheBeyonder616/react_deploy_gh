import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        className="input"
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />

      <label
        className="label"
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>

      <div className="svg">
        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          className="svg__icon"
          role="button"
          tabIndex="0"
          aria-label={`Delete ${item.item}`}
        />
      </div>
    </li>
  );
};
export default LineItem;
