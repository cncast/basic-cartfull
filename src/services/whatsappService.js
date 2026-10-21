// src/services/whatsappService.js

// Número de teléfono de la empresa (Ejemplo: Honduras +504 -> 50499998888)
const COMPANY_PHONE = '50499998888'; 

export const sendWhatsAppOrder = (client, cartItems, total) => {
  // Construimos el mensaje formateado usando sintaxis de WhatsApp (*texto* para negrita)
  let message = `*¡Hola! Quiero realizar un pedido desde la web.* 🛍️\n\n`;
  message += `*👤 Datos del Cliente:*\n`;
  message += `• *Nombre:* ${client.nombre}\n`;
  message += `• *Teléfono:* ${client.telefono}\n\n`;
  
  message += `*📋 Detalle del Pedido:*\n`;
  cartItems.forEach((item) => {
    const subtotal = item.precio * item.quantity;
    message += `• ${item.nombre} x${item.quantity} - $${subtotal.toFixed(2)}\n`;
  });

  message += `\n*💰 Total a Pagar:* $${total.toFixed(2)}\n\n`;
  message += `Quedo a la espera de su confirmación para proceder con la entrega. ¡Gracias!`;

  // Codificamos el texto para que sea seguro en una URL (revierte saltos de línea a %20, %0A, etc.)
  const encodedMessage = encodeURIComponent(message);

  // Generamos la URL final
  const whatsappUrl = `https://wa.me/${COMPANY_PHONE}?text=${encodedMessage}`;

  // Abrimos WhatsApp en una nueva pestaña
  window.open(whatsappUrl, '_blank');
};