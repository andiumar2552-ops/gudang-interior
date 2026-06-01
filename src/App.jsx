import project1 from "./images/project1.jpg"
import project2 from "./images/project2.jpg"
import project3 from "./images/project3.jpg"
import project4 from "./images/project4.jpg"
import project5 from "./images/project5.jpg"
import project6 from "./images/project6.jpg"
import products from "./products"
console.log(products)
import { useEffect, useState } from "react";
export default function App() {
  const cardStyle = {
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease", // ini penting
  cursor: "pointer"
}

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover"
}

const titleStyle = {
  fontSize: "18px",
  fontWeight: "800",
  marginTop: "12px",
  color: "#111"
}

const descStyle = {
  fontSize: "14px",
  color: "#666",
  padding: "0 10px 15px"
}
 const boxStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "all 0.4s ease",
cursor: "default"
} 
const testiStyle = {
  background: "#f7f7f7",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  transition: "all 0.4s ease",  
}
useEffect(() => {
  const cards = document.querySelectorAll(".fade-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 150}ms`;
    observer.observe(card);
  });
}, []);
const [openProduct, setOpenProduct] = useState(null);
const socialIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "1px solid #d4a017",
  color: "#d4a017",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "22px"
}
return (
    <div>
      <nav style={{
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  background: "#ffffff",
  padding: "18px 30px",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
}}>
  <h2 style={{
    margin: 0,
    fontSize: "22px",
    fontWeight: "900",
    color: "#000000",
    letterSpacing: "0.5px"
  }}>
    Gudang Interior
  </h2>

  <a
    href="https://wa.me/081214051048"
    style={{
      color: "#000000",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: "16px"
    }}
  >
    Hubungi Kami
  </a>
</nav>
<section className="fade"></section>
      <section style={{     
  paddingTop: "120px",
  paddingBottom: "80px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  color: "white",
  overflow: "hidden"
}}>
  
  {/* Background Image */}
  <div style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0
  }} />

  {/* Overlay biar teks jelas */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 1
  }} />

  {/* Content */}
  <div style={{
  position: "relative",
  zIndex: 2,
  maxWidth: "800px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}}>
  
  <h1 style={{
    fontSize: "clamp(28px, 5vw, 56px)",
    fontWeight: "900",
    lineHeight: "1.2",
    margin: 0
  }}>
    Interior Custom Elegan & Berkualitas
  </h1>

  <p style={{
    fontSize: "18px",
    lineHeight: "1.7",
    opacity: 0.9,
    marginTop: "16px",
    maxWidth: "700px"
  }}>
    Kami menghadirkan furniture interior custom untuk rumah, kantor,
    cafe, toko, dan berbagai kebutuhan ruang Anda.
  </p>

  {/* CTA BUTTON DIPISAH DENGAN MARGIN YANG JELAS */}
  <a
    href="https://wa.me/081214051048"
    target="_blank"
    rel="noreferrer"
    style={{
      display: "inline-block",
      marginTop: "28px",
      background: "#25D366",
      color: "white",
      padding: "14px 30px",
      borderRadius: "12px",
      fontWeight: "700",
      textDecoration: "none",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
    }}
  >
    Konsultasi Sekarang
  </a>
<a
  href="#produk"
  style={{
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 24px",
    backgroundColor: "#ffffff",
    color: "#111",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    border: "1px solid #ddd",
  }}
>
  Lihat Katalog
</a>
</div>
</section>
<section className="fade"></section>
<section
  id="produk"
  style={{
    padding: "80px 20px",
    background: "#fff",
    textAlign: "center",
  }}
>
  <h2 style={{
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "40px",
    color: "#111"
  }}>
    Produk Kami
  </h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto"
  }}>

  {products.map((product, index) => (
  <div
  key={product.id}
  onClick={() =>
    setOpenProduct(
      openProduct === index ? null : index
    )
  }
  style={{
    textDecoration: "none",
    color: "inherit",
    display: "block"
  }}
>
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)"
        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(0,0,0,0.15)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.08)"
      }}
    >
      <img
  src={product.image}
  alt={product.name}
  style={{
    ...imgStyle,
    cursor: "pointer"
  }}
/>

      <h3 style={titleStyle}>
  {product.name}
</h3>

<div style={descStyle}>
  {product.description}
</div>

<div
  style={{
    fontSize: "22px",
    fontWeight: "700",
    color: "#c48b2d",
    marginTop: "12px",
    marginBottom: "16px",
  }}  
>
  {product.id === 1
  ? "Rp 350.000"
  : product.id === 2
  ? "Rp 275.000"
  : "Rp 190.000"}
</div>
<button
  onClick={(e) => {
    e.stopPropagation()
    setOpenProduct(
      openProduct === index ? null : index
    )
  }}
  style={{
    background: "transparent",
    border: "1px solid #d4af37",
    color: "#c48b2d",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "14px",
  }}
>
  {openProduct === index
    ? "Tutup Detail"
    : "Lihat Detail"}
</button>
{openProduct === index && (
  <div
    style={{
      borderTop: "1px solid #eee",
      marginTop: "12px",
      paddingTop: "14px",
      fontSize: "14px",
      lineHeight: "1.8",
      color: "#555",
    }}
  >
    <p>
      <strong>Ukuran:</strong> {product.size}
    </p>

    <p>
      <strong>Material:</strong> {product.material}
    </p>

    <p>
      <strong>Finishing:</strong> {product.finishing}
    </p>

    <p>
      <strong>Keterangan:</strong> {product.detail}
    </p>
  </div>
)}
<a
  href={product.whatsapp}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
  style={{
    display: "inline-block",
    background: "#111",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "16px",
  }}
>
  Pesan Sekarang
</a>
    </div>
  </div>
))} 

  </div>
</section>
<section
  style={{
    padding: "80px 20px",
    background: "#f8f8f8",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
  style={{
    fontSize: "36px",
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
    marginBottom: "20px",
    textShadow: "none",
    opacity: 1,
    letterSpacing: "0.5px",
  }}
>
  Galeri Proyek Kami
</h2>

    <p
      style={{
        color: "#666",
        marginBottom: "40px",
      }}
    >
      Beberapa hasil pengerjaan interior custom dari Gudang Interior
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
      }}
    >
      {[
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
].map((img, index) => (
        <div
          key={index}
          style={{
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={img}
            alt={`Project ${index + 1}`}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              display: "block",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>
<section className="fade"></section>
<section style={{
  padding: "80px 20px",
  background: "#f7f7f7",
  textAlign: "center"
}}>
  <h2 style={{
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "40px",
    color: "#111"
  }}>
    Keunggulan Kami
  </h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto"
  }}>

    <div
  className="fade-card"
  style={boxStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  }}
>
  <h3>Custom Design</h3>
  <p>Desain sesuai kebutuhan dan ruang Anda.</p>
</div>
    <div
  className="fade-card"
  style={boxStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  }}
>
  <h3>Material Berkualitas</h3>
  <p>Menggunakan bahan terbaik dan tahan lama.</p>
    </div>

    <div
  className="fade-card"
  style={boxStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  }}
>
  <h3>Harga Terjangkau</h3>
  <p>Solusi interior dengan budget fleksibel.</p>
</div>
  </div>
</section>
<section className="fade"></section>
<section style={{
  padding: "80px 20px",
  background: "#fff",
  textAlign: "center"
}}>
  <h2 style={{
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "40px",
    color: "#111"
  }}>
    Testimoni Pelanggan
  </h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto"
  }}>

    <div
  className="fade-card"
  style={testiStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
  }}
>

      <p>"Hasil kitchen set sangat rapi dan sesuai harapan. Recommended!"</p>
      <h4>- Budi, Ciamis</h4>
    </div>

    <div
  className="fade-card"
  style={testiStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
  }}
>
      <p>"Pelayanan cepat dan desainnya modern banget."</p>
      <h4>- Sari, Bandung</h4>
    </div>

    <div
  className="fade-card"
  style={testiStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
  }}
>

      <p>"Interior kantor jadi lebih nyaman dan profesional."</p>
      <h4>- Andi, Jakarta</h4>
    </div>

  </div>
</section>
<section className="fade"></section>
<footer
  id="kontak"
  style={{
    background: "#0b0b0b",
    color: "#fff",
    padding: "80px 40px 25px",
    marginTop: "0",
    borderTop: "1px solid #1f1f1f"
  }}
>
  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1.1fr 1.2fr",
      gap: "50px",
      alignItems: "start"
    }}
  >

    {/* kiri */}
    <div>
      <h2
        style={{
          fontSize: "46px",
          fontWeight: "700",
          lineHeight: "1.1",
          color: "#fff",
          marginBottom: "25px"
        }}
      >
        GUDANG <br /> INTERIOR
      </h2>

      <div
        style={{
          width: "60px",
          height: "3px",
          background: "#d4a017",
          marginBottom: "25px"
        }}
      />

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "1.9",
          fontSize: "17px"
        }}
      >
        Solusi interior custom modern,
        elegan, dan berkualitas untuk
        rumah dan bisnis Anda.
      </p>
      <div
  style={{
    display: "flex",
    gap: "14px",
    marginTop: "28px"
  }}
>
  <a
    href="https://instagram.com/"
    target="_blank"
    rel="noreferrer"
    style={socialIconStyle}
  >
    📷
  </a>

  <a
    href="https://facebook.com/"
    target="_blank"
    rel="noreferrer"
    style={socialIconStyle}
  >
    f
  </a>

  <a
    href="https://pinterest.com/"
    target="_blank"
    rel="noreferrer"
    style={socialIconStyle}
  >
    P
  </a>

  <a
    href="https://youtube.com/"
    target="_blank"
    rel="noreferrer"
    style={socialIconStyle}
  >
    ▶
  </a>
</div>
    </div>


    {/* menu */}
    <div
      style={{
        borderLeft: "1px solid rgba(212,161,23,.45)",
        paddingLeft: "40px"
      }}
    >
      <h3
        style={{
          color: "#d4a017",
          fontSize: "32px",
          marginBottom: "24px"
        }}
      >
        MENU
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          fontSize: "18px"
        }}
      >
        <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
        <a href="#produk" style={{ color: "#fff", textDecoration: "none" }}>Produk</a>
        <a href="#galeri" style={{ color: "#fff", textDecoration: "none" }}>Galeri</a>
        <a href="#testimoni" style={{ color: "#fff", textDecoration: "none" }}>Testimoni</a>
        <a href="#kontak" style={{ color: "#fff", textDecoration: "none" }}>Kontak</a>
      </div>
    </div>


    {/* kontak */}
    <div
      style={{
        borderLeft: "1px solid rgba(212,161,23,.45)",
        paddingLeft: "40px"
      }}
    >
      <h3
        style={{
          color: "#d4a017",
          fontSize: "32px",
          marginBottom: "24px"
        }}
      >
        KONTAK
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "17px",
          color: "#f3f4f6"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span>📍</span>
          <span>Ciamis, Indonesia</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span>📞</span>
          <span>0812-1405-1048</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span>✉</span>
          <span>gudang.interior25@gmail.com</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span>🕒</span>
          <span>Senin - Sabtu 08.00 - 17.00 WIB</span>
        </div>
      </div>
    </div>


    {/* whatsapp */}
    <div
      style={{
        borderLeft: "1px solid rgba(212,161,23,.45)",
        paddingLeft: "40px"
      }}
    >
      <h3
        style={{
          color: "#d4a017",
          fontSize: "32px",
          marginBottom: "24px"
        }}
      >
        CHAT WHATSAPP
      </h3>

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "1.9",
          marginBottom: "35px",
          fontSize: "17px"
        }}
      >
        Butuh konsultasi atau penawaran?
        Hubungi kami langsung via WhatsApp.
      </p>

      <a
        href="https://wa.me/6281214051048"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "18px 34px",
          border: "2px solid #d4a017",
          color: "#d4a017",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "18px"
        }}
      >
        WhatsApp Kami
      </a>
    </div>
  </div>


  <div
    style={{
      borderTop: "1px solid rgba(212,161,23,.35)",
      marginTop: "55px",
      paddingTop: "22px",
      textAlign: "center",
      color: "#d1d5db",
      fontSize: "15px"
    }}
  >
    © 2026 Gudang Interior. All Rights Reserved.
  </div>
</footer>
<a
  href="https://api.whatsapp.com/send?phone=6281214051048&text=Halo%20Gudang%20Interior,%20saya%20ingin%20bertanya"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    zIndex: 9999,
  }}
>
  💬
</a>
    </div>    
  )  
}


