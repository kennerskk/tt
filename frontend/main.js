// Vite will inject environment variables here via import.meta.env
// For production, the URL is usually just relative like '/api'
// In development, the proxy handles it so we can also just use '/api'
const API_BASE = '/api';

async function fetchItems() {
  try {
    const response = await fetch(`${API_BASE}/items`);
    const items = await response.json();
    const list = document.getElementById('items-list');
    list.innerHTML = items.map(item => `<div class="item">
      <strong>${item.name}</strong>: ${item.description}
    </div>`).join('');
  } catch (err) {
    console.error('Error fetching items:', err);
    document.getElementById('items-list').innerHTML = 'Failed to load items.';
  }
}

document.getElementById('add-btn').addEventListener('click', async () => {
  const newItem = {
    name: 'Item ' + Math.floor(Math.random() * 1000),
    description: 'Auto-generated item'
  };
  try {
    await fetch(`${API_BASE}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });
    fetchItems(); // refresh list
  } catch (err) {
    console.error('Error creating item:', err);
  }
});

// Initial load
fetchItems();
