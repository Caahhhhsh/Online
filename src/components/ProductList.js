import React, { useEffect, useState } from 'react';
import { db, storage } from '../firebase';
import { collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (productId, imageUrl) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        // Delete product from Firestore
        await deleteDoc(doc(db, 'products', productId));

        // Delete image from Storage if exists
        if (imageUrl) {
          const imageRef = ref(storage, imageUrl);
          try {
            await deleteObject(imageRef);
          } catch (err) {
            console.log('Image not found or already deleted');
          }
        }
      } catch (err) {
        alert('Error deleting product: ' + err.message);
      }
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      stock: product.stock,
    });
  };

  const handleSaveEdit = async (productId) => {
    try {
      await updateDoc(doc(db, 'products', productId), editFormData);
      setEditingId(null);
      setEditFormData(null);
    } catch (err) {
      alert('Error updating product: ' + err.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  const handleEditChange = (field, value) => {
    setEditFormData({
      ...editFormData,
      [field]: value,
    });
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="no-products">No products added yet.</div>;
  }

  return (
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} className="product-image" />
          )}
          {editingId === product.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editFormData.name}
                onChange={(e) => handleEditChange('name', e.target.value)}
                placeholder="Product name"
              />
              <input
                type="number"
                value={editFormData.price}
                onChange={(e) => handleEditChange('price', parseFloat(e.target.value))}
                placeholder="Price"
                step="0.01"
              />
              <input
                type="number"
                value={editFormData.stock}
                onChange={(e) => handleEditChange('stock', parseInt(e.target.value))}
                placeholder="Stock"
              />
              <textarea
                value={editFormData.description}
                onChange={(e) => handleEditChange('description', e.target.value)}
                placeholder="Description"
              ></textarea>
              <div className="edit-buttons">
                <button onClick={() => handleSaveEdit(product.id)} className="save-btn">
                  Save
                </button>
                <button onClick={handleCancelEdit} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="stock">Stock: {product.stock}</p>
              <p className="description">{product.description}</p>
              <div className="product-actions">
                <button onClick={() => handleEdit(product)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id, product.imageUrl)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;