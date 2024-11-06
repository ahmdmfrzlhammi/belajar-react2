import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setItems([...items, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', price: '' });
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <form onSubmit={addItem} className="space-y-4 mb-4">
        <div>
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Item name"
          />
        </div>
        <div>
          <input
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Price"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded"
        >
          Add Item
        </button>
      </form>
      <ul className="space-y-2">
        {items.map(item => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-gray-800 p-2 rounded"
          >
            <div>
              <span>{item.name}</span>
              <span className="ml-2 text-gray-400">
                ${Number(item.price).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:text-red-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
      <button
        onClick={() => navigate('/done')}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default ShoppingCart;