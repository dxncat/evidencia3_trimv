import React from 'react'
import './QR.css'
import { Logo } from '../../components/Logo'
import { Aqua } from '../../components/Aqua'

function QR() {
    return (
        <div className="outer-container">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="scanner-card">
                    <Logo />
                    <div className="divider"></div>
                    <p className="scan-text">ESCANEAR QR</p>
                </div>
            </div>
            <Aqua />
        </div>
    )
}

export default QR