import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
const [material, setMaterial] = useState("");
const [finishing, setFinishing] = useState("");
const [detail, setDetail] = useState("");
const [whatsapp, setWhatsapp] = useState("");
const [products, setProducts] = useState([]);

  const saveProduct = async () => {
    try {
      await addDoc(collection(db, "products"), {
  name,
  price,
  description,
  size,
  material,
  finishing,
  detail,
  whatsapp,
  createdAt: new Date()
});

      alert("Produk berhasil disimpan");
      loadProducts();

      setName("");
      setPrice("");
      setDescription("");
      setSize("");
setMaterial("");
setFinishing("");
setDetail("");
setWhatsapp("");
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan produk");
    }
  };
  const loadProducts = async () => {
  const querySnapshot = await getDocs(
    collection(db, "products")
  );

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  setProducts(data);
};

const deleteProduct = async (id) => {
  if (!window.confirm("Hapus produk ini?")) return;

  await deleteDoc(doc(db, "products", id));

  loadProducts();
};

useEffect(() => {
  loadProducts();
}, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard Admin Gudang Interior</h1>

      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px"
        }}
      >
        <input
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
        <input
  placeholder="Ukuran"
  value={size}
  onChange={(e) => setSize(e.target.value)}
/>

<input
  placeholder="Material"
  value={material}
  onChange={(e) => setMaterial(e.target.value)}
/>

<input
  placeholder="Finishing"
  value={finishing}
  onChange={(e) => setFinishing(e.target.value)}
/>

<textarea
  placeholder="Detail Produk"
  value={detail}
  onChange={(e) => setDetail(e.target.value)}
/>

<input
  placeholder="Link WhatsApp"
  value={whatsapp}
  onChange={(e) => setWhatsapp(e.target.value)}
/>

        <button onClick={saveProduct}>
          Simpan Produk
        </button>
        <hr style={{ margin: "40px 0" }} />

<h2>Daftar Produk</h2>

{products.map((product) => (
  <div
    key={product.id}
    style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "10px"
    }}
  >
    <h3>{product.name}</h3>

    <p>{product.price}</p>

    <button
      onClick={() =>
        deleteProduct(product.id)
      }
    >
      Hapus
    </button>
  </div>
))}
      </div>
    </div>
  );
}