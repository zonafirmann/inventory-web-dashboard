import { useState, useEffect } from 'react';

function App() {
  // 1. STATE MANAGEMENT
  // 'products' will hold the array of items from our Go API. Default is empty array [].
  const [products, setProducts] = useState([]);
  
  // 'isLoading' manages the UI state while waiting for the API response.
  const [isLoading, setIsLoading] = useState(true);

  // 2. LIFECYCLE & DATA FETCHING
  // useEffect ensures this fetching logic only runs once when the web page loads.
  useEffect(() => {
    // Define an asynchronous function to request data
    const fetchProducts = async () => {
      try {
        // Hit the Golang API endpoint (running in Docker at port 8080)
        const response = await fetch('http://localhost:8080/products');
        
        // Parse the JSON response
        const data = await response.json();
        
        // Update the React state with the fetched data
        setProducts(data);
        setIsLoading(false); // Turn off loading indicator
      } catch (error) {
        // Log any errors if the server is unreachable
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    // Execute the fetch function
    fetchProducts();
  }, []); // The empty dependency array [] is crucial here!

  // 3. UI RENDERING
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>📦 Inventory Web Dashboard</h1>
      <p>Real-time data from Go Cloud API</p>

      {/* Conditional rendering: Show loading text OR the data table */}
      {isLoading ? (
        <p style={{ color: 'blue' }}>Loading products from server...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
              <th>ID</th>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price (IDR)</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through the products array and map them to table rows */}
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  {/* Highlight dynamically: if stock is 3 or below, make it red and bold */}
                  <span style={{ 
                    color: product.stock <= 3 ? 'red' : 'black', 
                    fontWeight: product.stock <= 3 ? 'bold' : 'normal' 
                  }}>
                    {product.stock}
                  </span>
                </td>
                <td>Rp {product.price.toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;