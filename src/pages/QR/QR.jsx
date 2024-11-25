import React from 'react'
import './QR.css'

function QR() {
    return (
        <div className="outer-container">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="scanner-card">
                    <div className="logo-container">
                        <img src="/qr.png" alt="SICRP QR Logo" className="img-fluid" />
                    </div>
                    <div className="divider"></div>
                    <p className="scan-text">ESCANEAR QR</p>
                </div>
            </div>
            <img src="/logo.png" alt="Police Badge" className="badge-logo" />
        </div>
    )
}

export default QR