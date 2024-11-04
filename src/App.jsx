// Import CSS
import "./App.css";
import { useState } from 'react';
import Image from './assets/images/iin.png';

// Counter Button component (independent counters)
function CounterButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 5);
  }

  return (
    <button onClick={handleClick}>
      Diklik {count} kali
    </button>
  );
}

// // Simple Button component
function MyButton() {
  return (
    <button>
      pencet
    </button>
  );
}

// // About Page component
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Halo.<br />Mufarizal</p>
    </>
  );
}

// // Shared Counter Button component (uses shared count and onClick handler)
function SharedCounterButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Diklik {count} kali
    </button>
  );
}

// // User profile data
const user = {
  name: '@muffaaa_',
  // imageUrl: 'https://github.com/muffaaa_.png',
  imageSize: 100,
};

// // Profile component
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      {/* <img
        className="avatar"
        src={user.imageUrl}
        // alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
        }}
      /> */}
      <img
        className="avatar"
        src={user.imageUrl}
        // alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
        }}
      />
    </>
  );
}

// // Product list data
const products = [
  { title: 'Ahmad', id: 1, color: 'yellow' },
  { title: 'Mufarizal', id: 2, color: 'gray' },
  { title: 'Hammi', id: 3, color: 'white' },
];

// // Shopping List component
function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.color
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

// Main App component
export default function App() {
  // Shared state for the "Penghitung yang diperbarui bersamaan" section
  const [count, setCount] = useState(0);

  // Handler functions for arithmetic buttons
  function increment() {
    setCount(count + 5);
  }

  function decrement() {
    setCount(count - 5);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Belajar</h1>
      <MyButton />


      <AboutPage />


      {/* <Profile /> */}
      <img 
  src={Image} 
  alt="" 
  width={100} // Set both width and height to be equal for a circular shape
  style={{ 
    borderRadius: '50%', // 50% border radius makes the image circular
    height: '100px' // Keep height the same as width for a perfect circle
  }} 
/>




      <h2>Daftar Belanja</h2>
      <ShoppingList />


      <div>
        <h1>Penghitung yang diperbarui secara terpisah</h1>
        <CounterButton />
        <CounterButton />
      </div>


      <div>
        <h1>Penghitung yang diperbarui bersamaan</h1>
        <SharedCounterButton count={count} onClick={increment} />
        <SharedCounterButton count={count} onClick={increment} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={decrement} style={{ marginRight: '10px' }}>Kurangi 5</button>
        <button onClick={reset}>Reset</button>
      </div>

    </div>
  );
}

