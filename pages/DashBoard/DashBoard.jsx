import React from 'react'
import './DashBoard.css'

function DashBoard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto px-0">
                    <div className="sidebar">
                        <a href="#" className="sidebar-link">
                            <i className="bi bi-house-door"></i>
                            INICIO
                        </a>
                        <a href="#" className="sidebar-link">
                            <i className="bi bi-file-text"></i>
                            REPORTE CUADRANTE
                        </a>
                        <a href="#" className="sidebar-link">
                            <i className="bi bi-grid"></i>
                            CUADRANTES
                        </a>
                        <a href="#" className="sidebar-link">
                            <i className="bi bi-car-front"></i>
                            PATRULLAS
                        </a>
                    </div>
                </div>
                <div className="col main-content">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="logo-container">
                            <img src="/qr.png" alt="SICRP Logo" className="img-fluid" />
                        </div>
                    </div>
                    <img src="/logo.png" alt="Police Badge" className="badge-logo" />
                </div>
            </div>
        </div>
    )
}

export default DashBoard