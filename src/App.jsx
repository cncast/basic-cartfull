import React, { useState, useEffect } from 'react';

// Componente para íconos FontAwesome (ej. name="fa-star")
const Icon = ({ name, className = '', style = {} }) => (
  <i className={`fa-solid ${name} ${className}`} style={style}></i>
);

// Número de WhatsApp de la empresa (sin +)
const COMPANY_PHONE = '50432609000';

// Imagen por defecto en SVGDataURL o fallback
const DEFAULT_IMAGE = 'https://via.placeholder.com/150?text=Sin+Imagen';

const PRODUCTS =
  // { id: 1, nombre: 'Hamburguesa Clásica', precio: 8.5, categoria: 'Comidas', imagen: '/images/hamburguesa.jpg' },
[
    {
        "id": "Arroz Blanco Mr Diek 1lb 4pack",
        "nombre": "Arroz Blanco Mr Diek 1lb 4pack",
        "precio": 11.86*4,
        "categoria": "Granos",
        "imagen": ""
    },
    {
        "id": "Arroz Blanco Progreso 1lb 4pack",
        "nombre": "Arroz Blanco Progreso 1lb 4pack",
        "precio": 12.75*4,
        "categoria": "Granos",
        "imagen": ""
    },
    {
        "id": "Arroz Blanco Tia Emily 1lb 4pack",
        "nombre": "Arroz Blanco Tia Emily 1lb 4pack",
        "precio": 17.75*4,
        "categoria": "Granos",
        "imagen": ""
    },
    {
        "id": "Arroz Precocido Mr Diek 1lb 4pack",
        "nombre": "Arroz Precocido Mr Diek 1lb 4pack",
        "precio": 12.4*4,
        "categoria": "Granos",
        "imagen": ""
    },
    {
        "id": "Arroz Precocido Progreso 1lb 4pack",
        "nombre": "Arroz Precocido Progreso 1lb 4pack",
        "precio": 12.1*4,
        "categoria": "Granos",
        "imagen": ""
    },
    {
        "id": "Azucar Blanca 4lb",
        "nombre": "Azucar Blanca 4lb",
        "precio": 32.38*2,
        "categoria": "Azucar",
        "imagen": ""
    },
    {
        "id": "Espaguetti Mi Pasta 2lb",
        "nombre": "Espaguetti Mi Pasta 2lb",
        "precio": 6.94*4,
        "categoria": "Pastas",
        "imagen": ""
    },
    {
        "id": "Azucar Morena 4lb",
        "nombre": "Azucar Morena 4lb",
        "precio": 17.19*4,
        "categoria": "Azucar",
        "imagen": ""
    },
    {
        "id": "Pasta Tomate Icima 4pack",
        "nombre": "Pasta Tomate Icima 4pack",
        "precio": 11.35*4,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Pasta Tomate Naturas 4pack",
        "nombre": "Pasta Tomate Naturas 4pack",
        "precio": 14.17*4,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Pasta Tomate Campofresco 4pack",
        "nombre": "Pasta Tomate Campofresco 4pack",
        "precio": 10.94*4,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Ketchup Icima 4pack",
        "nombre": "Ketchup Icima 4pack",
        "precio": 11.67*4,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Ketchup Naturas 4pack",
        "nombre": "Ketchup Naturas 4pack",
        "precio": 13.02*4,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Ketchup Grande Icima",
        "nombre": "Ketchup Grande Icima",
        "precio": 35.63,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Ketchup Grande Naturas",
        "nombre": "Ketchup Grande Naturas",
        "precio": 50.63,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Mayonesa Regia 350g",
        "nombre": "Mayonesa Regia 350g",
        "precio": 55.1,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Mayonesa Hellmans 380g",
        "nombre": "Mayonesa Hellmans 380g",
        "precio": 75,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Mayonesa Mackornie 800g",
        "nombre": "Mayonesa Mackornie 800g",
        "precio": 91.25,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Manteca Mazola 1kg",
        "nombre": "Manteca Mazola 1kg",
        "precio": 59.23,
        "categoria": "Salsas",
        "imagen": ""
    },
    {
        "id": "Manteca Clover 1kg",
        "nombre": "Manteca Clover 1kg",
        "precio": 59.62,
        "categoria": "Grasas",
        "imagen": ""
    },
    {
        "id": "Jabon Ropa Zixx 4pack",
        "nombre": "Jabon Ropa Zixx 4pack",
        "precio": 117.75,
        "categoria": "Grasas",
        "imagen": ""
    },
    {
        "id": "Jabon Baño Palmolive Grande 3pck",
        "nombre": "Jabon Baño Palmolive Grande 3pck",
        "precio": 23.13*3,
        "categoria": "Aseo",
        "imagen": ""
    },
    // {
    //     "id": "Jabon de Baño Bensa",
    //     "nombre": "Jabon de Baño Bensa",
    //     "precio": 14.06,
    //     "categoria": "Aseo",
    //     "imagen": ""
    // },
    {
        "id": "Jabon Baño Protex 3pck",
        "nombre": "Jabon Baño Protex 3pck",
        "precio": 23.23*3,
        "categoria": "Aseo",
        "imagen": ""
    },
    {
        "id": "Harina Maiz Olimpia 2Lb",
        "nombre": "Harina Maiz Olimpia 2Lb",
        "precio": 25.63,
        "categoria": "Harinas",
        "imagen": ""
    },
    {
        "id": "Harina Maiz Agromasa 2lb",
        "nombre": "Harina Maiz Agromasa 2lb",
        "precio": 22.5,
        "categoria": "Harinas",
        "imagen": ""
    },
    {
        "id": "Harina Maiz Amarilla Comal",
        "nombre": "Harina Maiz Amarilla Comal",
        "precio": 27.13,
        "categoria": "Harinas",
        "imagen": ""
    },
    {
        "id": "Detergente UltraKlin 115g 6pck",
        "nombre": "Detergente UltraKlin 115g 6pck",
        "precio": 7.18*6,
        "categoria": "Aseo",
        "imagen": ""
    },
    {
        "id": "Detergente UltraKlin 9kg",
        "nombre": "Detergente UltraKlin 9kg",
        "precio": 375,
        "categoria": "Aseo",
        "imagen": ""
    },
    {
        "id": "Jabon Trastes Limpiox 200g 3pck",
        "nombre": "Jabon Trastes Limpiox 200g 3pck",
        "precio": 9.55*3,
        "categoria": "Aseo",
        "imagen": ""
    },
    {
        "id": "Jabon Trastes Axion 200g 3pck",
        "nombre": "Jabon Trastes Axion 200g 3pck",
        "precio": 12.05*3,
        "categoria": "Aseo",
        "imagen": ""
    },
    {
        "id": "Papel Higienico Wallys 6R",
        "nombre": "Papel Higienico Wallys 6R",
        "precio": 15.36*6,
        "categoria": "Personal",
        "imagen": ""
    },
    // {
    //     "id": "Papel Higienico Wallys 4R",
    //     "nombre": "Papel Higienico Wallys 4R",
    //     "precio": 61.67,
    //     "categoria": "Personal",
    //     "imagen": ""
    // },
    {
        "id": "Colgate Mashfresh 150ml",
        "nombre": "Colgate Mashfresh 150ml",
        "precio": 75,
        "categoria": "Personal",
        "imagen": ""
    },
    {
        "id": "Asistin Fabuloso 900ml",
        "nombre": "Asistin Fabuloso 900ml",
        "precio": 56.25,
        "categoria": "Aseo",
        "imagen": ""
    },
    {
        "id": "Desodorante Rexona Barra",
        "nombre": "Desodorante Rexona Barra",
        "precio": 75,
        "categoria": "Personal",
        "imagen": ""
    },
    {
        "id": "Desodorante Axe Barra",
        "nombre": "Desodorante Axe Barra",
        "precio": 68.75,
        "categoria": "Personal",
        "imagen": ""
    },
    {
        "id": "Gelatina EGO 200ml",
        "nombre": "Gelatina EGO 200ml",
        "precio": 22.5,
        "categoria": "Personal",
        "imagen": ""
    },
    {
        "id": "Suavitel 670ml",
        "nombre": "Suavitel 670ml",
        "precio": 150,
        "categoria": "Aseo",
        "imagen": ""
    }
]

const CATEGORIES = [
  { name: 'Todos', icon: 'fa-border-all' },
  // { name: 'Pasta', icon: 'fa-list' },
  // { name: 'Grasas', icon: 'fa-list' },
  // { name: 'Granos', icon: 'fa-list' },
  // { name: 'Salsas', icon: 'fa-list' },
  // { name: 'Aseo', icon: 'fa-list' },
].concat(Object.keys(PRODUCTS.reduce((acc, curr)=>{
  acc[curr.categoria] = 1;
  return acc;
},{})).map(e => ({name: e, icon: 'fa-list'})));

export default function SalesApp() {
  const [client, setClient] = useState(() => {
    const saved = localStorage.getItem('sales_client');
    return saved ? JSON.parse(saved) : { nombre: '', telefono: '' };
  });

  const [isClientRegistered, setIsClientRegistered] = useState(() => {
    const saved = localStorage.getItem('sales_client');
    if (saved) {
      const parsed = JSON.parse(saved);
      return Boolean(parsed.nombre && parsed.telefono);
    }
    return false;
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('sales_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [view, setView] = useState('catalog');

  useEffect(() => {
    localStorage.setItem('sales_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (isClientRegistered) {
      localStorage.setItem('sales_client', JSON.stringify(client));
    }
  }, [client, isClientRegistered]);

  const handleClientSubmit = (e) => {
    e.preventDefault();
    if (client.nombre.trim() && client.telefono.trim()) {
      setIsClientRegistered(true);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId);
      if (existing.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;
    let message = `*¡Hola! Quisiera hacer un pedido:* \n\n`;
    message += `*Cliente:* ${client.nombre}\n`;
    message += `*Teléfono:* ${client.telefono}\n\n`;
    message += `*Detalle del pedido:*\n`;
    cart.forEach((item) => {
      message += `• ${item.quantity} x ${item.nombre} - _L ${(item.precio * item.quantity).toFixed(2)}_\n`;
    });
    message += `\n*Total:* L ${getTotalPrice().toFixed(2)}`;

    const url = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const filteredProducts = selectedCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categoria === selectedCategory);

  const styles = {
    wrapper: {
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box',
    },
    container: {
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      paddingBottom: '110px', // Otorga espacio extra para el botón flotante
      boxSizing: 'border-box',
    },
    header: {
      backgroundColor: '#ffffff',
      padding: '8px 12px',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #edf2f7',
      overflow: 'hidden',
      boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    btnGray: {
      backgroundColor: '#edf2f7',
      color: '#4a5568',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
    },
    btnIconGray: {
      backgroundColor: '#b6eeed',
      color: '#4a5568',
      border: 'none',
      borderRadius: '6px',
      width: '39px',
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '22px',
    },
    fixedFooter: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '8px 12px',
      borderTop: '1px solid #e2e8f0',
      boxShadow: '0 -2px 6px rgba(0,0,0,0.05)',
      zIndex: 20,
      boxSizing: 'border-box',
    },
    btnCartMain: {
      width: '100%',
      maxWidth: '570px',
      margin: '0 auto',
      backgroundColor: '#319795',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 14px',
      fontSize: '14px',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      boxSizing: 'border-box',
    }
  };

  // 1. REGISTRO DE CLIENTE
  if (!isClientRegistered) {
    return (
      <div style={styles.wrapper}>
        <div style={{ ...styles.container, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ ...styles.card, width: '100%', padding: '18px' }}>
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <Icon name="fa-user-check" style={{ fontSize: '24px', color: '#319795' }} />
              <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '6px' }}>Datos de Cliente</h2>
              <p style={{ fontSize: '11px', color: '#718096' }}>Ingresa tu información para realizar pedidos</p>
            </div>
            <form onSubmit={handleClientSubmit}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#4a5568', marginBottom: '2px' }}>Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Pedro Pérez"
                  value={client.nombre}
                  onChange={(e) => setClient({ ...client, nombre: e.target.value })}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '13px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#4a5568', marginBottom: '2px' }}>Teléfono</label>
                <input
                  type="tel"
                  required
                  placeholder="Ej. 9999-8888"
                  value={client.telefono}
                  onChange={(e) => setClient({ ...client, telefono: e.target.value })}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '13px', boxSizing: 'border-box' }}
                />
              </div>
              <button type="submit" style={{ ...styles.btnGray, width: '100%', backgroundColor: '#319795', color: '#fff', padding: '10px', fontSize: '13px' }}>
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // 2. VISTA DEL CARRITO (SIN IMÁGENES)
  if (view === 'cart') {
    return (
      <div style={{...styles.wrapper}}>
        <div style={{...styles.container, backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '16px 16px'}}>
          <header style={styles.header}>
            <button onClick={() => setView('catalog')} style={styles.btnGray}>
              <Icon name="fa-arrow-left" /> Volver
            </button>
            <h1 style={{ fontWeight: 'bold', fontSize: '22px', margin: 0 }}>Carrito de Compras</h1>
            <div style={{ width: '30px' }}></div>
          </header>

          <div style={{ padding: '10px', boxSizing: 'border-box' }}>
            <div className='row' style={{ ...styles.card, flexDirection: "row", padding: '8px 12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#718096', fontWeight: 'bold' }}>CLIENTE:</span>
                <p style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>{client.nombre} ({client.telefono})</p>
              </div>
              <button onClick={() => setIsClientRegistered(false)} style={styles.btnIconGray}>
                <Icon name="fa-pen" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: '#a0aec0' }}>
                <Icon name="fa-cart-shopping" style={{ fontSize: '32px', marginBottom: '6px' }} />
                <p style={{ fontSize: '14px', margin: 0 }}>El carrito está vacío</p>
              </div>
            ) : (
              <div style={{ ...styles.card, padding: '6px 10px' }}>
                {cart.map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #edf2f7' }}>
                    {/* Solo Nombre y Precio (Sin imagen) */}
                    <div style={{ overflow: 'hidden', paddingRight: '8px' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {item.nombre}
                      </h4>
                      <p style={{ fontSize: '13px', color: '#319795', fontWeight: 'bold', margin: 0 }}>
                        L {item.precio.toFixed(2)}x{item.quantity} <span style={{ color: '#a0aec0', fontWeight: 'normal' }}>= L {(item.precio*item.quantity).toFixed(2)}</span>
                      </p>
                    </div>

                    {/* Botones de Modificación */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                      <button onClick={() => removeFromCart(item.id)} style={styles.btnIconGray}>-</button>
                      <span style={{ fontWeight: 'bold', fontSize: '18px', minWidth: '18px', textAlign: 'center' }}>{item.quantity}</span>
                      <button onClick={() => addToCart(item)} style={styles.btnIconGray}>+</button>
                      {/* <button onClick={() => deleteFromCart(item.id)} style={{ ...styles.btnIconGray, backgroundColor: '#fff5f5', color: '#e53e3e', marginLeft: '4px' }}>
                        <Icon name="fa-trash-can" />
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={styles.fixedFooter}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontWeight: 'bold', fontSize: '13px' }}>
                <span>Total:</span>
                <span style={{ fontSize: '15px', color: '#319795' }}>L {getTotalPrice().toFixed(2)}</span>
              </div>
              <button
                onClick={handleSendWhatsApp}
                disabled={cart.length === 0}
                style={{
                  ...styles.btnCartMain,
                  backgroundColor: cart.length > 0 ? '#25D366' : '#cbd5e0',
                  justifyContent: 'center',
                  gap: '6px',
                  maxWidth: '100%'
                }}
              >
                <Icon name="fa-brands fa-whatsapp" /> Enviar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. VISTA PRINCIPAL (CATÁLOGO COMPACTO)
  return (
    <div style={styles.wrapper}>
      <div style={{...styles.container, backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '16px 16px'}}>
        {/* Header */}
        <header style={styles.header}>
          <div>
            <h1 style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Catálogo de Productos</h1>
            <p style={{ fontSize: '14px', color: '#718096', margin: 0 }}>Cliente: {client.nombre}</p>
          </div>
          <button onClick={() => setIsClientRegistered(false)} style={styles.btnIconGray}>
            <Icon name="fa-user-pen" />
          </button>
        </header>

        {/* Categorías con Íconos */}
        <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '8px 10px', backgroundColor: '#ffffff', borderBottom: '1px solid #edf2f7', boxSizing: 'border-box' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              style={{
                ...styles.btnGray,
                backgroundColor: selectedCategory === cat.name ? '#319795' : '#edf2f7',
                color: selectedCategory === cat.name ? '#ffffff' : '#4a5568',
                whiteSpace: 'nowrap',
                borderRadius: '12px',
                padding: '4px 10px',
                fontSize: '13px',
                padding: '10px',
                marginRight: '5px'
              }}
            >
              <Icon name={cat.icon} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de Productos Ultracompacto */}
        <main style={{ padding: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', boxSizing: 'border-box' }}>
          {filteredProducts.map((product) => {
            const inCart = cart.find((item) => item.id === product.id);
            return (
              <div key={product.id} style={styles.card}>
                <div>
                  {/* Renderizado de Imagen o Imagen por Defecto */}
                  <div style={{ width: '100%', height: '40px', backgroundColor: '#edf2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {product.imagen ? (
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        onError={(e) => { e.target.onerror = null; e.target.src = DEFAULT_IMAGE; }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <Icon name="fa-image" style={{ fontSize: '24px', color: '#cbd5e0' }} />
                    )}
                  </div>

                  <div style={{ padding: '6px', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{borderRadius: '10px', paddingLeft: '5px', paddingRight: '5px', position: 'absolute', backgroundColor: '#319795', marginTop: '-35px', fontSize: '9px', fontWeight: 'bold', color: 'white', textTransform: 'uppercase', display: 'block' }}>
                      {product.categoria}
                    </span>
                    <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '1px 0 -4px 0', lineHeight: '1.2', height: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {product.nombre}
                    </h3>
                    <p style={{ fontSize: '14px', fontWeight: '900', color: '#319795', margin: 0 }}>L {product.precio.toFixed(2)}</p>
                  </div>
                </div>

                <div style={{ padding: '0 6px 6px 6px' }}>
                  {inCart ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#edf2f7', borderRadius: '6px', padding: '0px' }}>
                      <button onClick={() => removeFromCart(product.id)} style={{ ...styles.btnIconGray, width: '40px', height: '40px' }}>-</button>
                      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{inCart.quantity}</span>
                      <button onClick={() => addToCart(product)} style={{ ...styles.btnIconGray, width: '40px', height: '40px' }}>+</button>
                    </div>
                  ) : (
                    <button onClick={() => addToCart(product)} style={{ ...styles.btnGray, width: '100%', padding: '12px' }}>
                      <Icon name="fa-plus" /> Agregar
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </main>

        {/* Botón Ver Carrito Fijo Inferior (Siempre Visita) */}
        <div style={styles.fixedFooter}>
          <button onClick={() => setView('cart')} style={styles.btnCartMain}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ backgroundColor: '#ffffff', color: '#319795', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                {getTotalItems()}
              </div>
              <span style={{ fontSize: '13px' }}>Ver Carrito</span>
            </div>
            <span style={{ fontSize: '13px' }}>L {getTotalPrice().toFixed(2)} →</span>
          </button>
        </div>
      </div>
      </div>
    );
  }
