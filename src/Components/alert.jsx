import React, { useEffect, useState } from "react";

const Alert = ({ type = "info", message, onClose, autoClose = true, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // แสดงแจ้งเตือนเมื่อ Component ถูก mount
    setIsVisible(true);

    let timer;
    if (autoClose) {
      timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // ให้แอนิเมชันทำงานเสร็จก่อนปิด
      }, duration);
    }

    return () => clearTimeout(timer); // ล้าง timer เมื่อ Component ถูก unmount
  }, [autoClose, duration, onClose]);

  const alertStyles = {
    base: {
      padding: "1rem",
      marginBottom: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid",
      transition: "transform 0.2s ease, opacity 0.3s ease",
      transform: isVisible ? "translateY(0)" : "translateY(-20px)",
      opacity: isVisible ? 1 : 0,
      position: 'fixed',
      top:'0',
      width:'100%',
      zIndex:'1003',
      borderBottomLeftRadius: '0.5rem',
      borderBottomRightRadius: '0.5rem',
    },
    types: {
      success: {
        backgroundColor: "#d4edda",
        color: "#155724",
        borderColor: "#c3e6cb",
      },
      error: {
        backgroundColor: "#f8d7da",
        color: "#721c24",
        borderColor: "#f5c6cb",
      },
      warning: {
        backgroundColor: "#fff3cd",
        color: "#856404",
        borderColor: "#ffeeba",
      },
      info: {
        backgroundColor: "#d1ecf1",
        color: "#0c5460",
        borderColor: "#bee5eb",
      },
    },
    closeButton: {
      marginLeft: "1rem",
      fontSize: "1.5rem",
      color: "#000",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
  };

  const combinedStyles = {
    ...alertStyles.base,
    ...(alertStyles.types[type] || alertStyles.types.info),
  };

  return (
    <div style={combinedStyles} role="alert">
      <span>{message}</span>
      {onClose && (
        <button
          style={alertStyles.closeButton}
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // ให้แอนิเมชันทำงานเสร็จก่อนปิด
          }}
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
