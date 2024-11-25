import React from 'react'

function Login() {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="bg-white rounded-lg shadow p-4 p-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                        <div className="logo-container">
                            <img src="/qr.png" alt="SICRP Logo" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center text-md-start mb-4">
                            <h1 className="text-primary display-4 fw-bold">SICRP</h1>
                            <p className="text-muted small">
                                SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICÍA
                            </p>
                        </div>

                        <form id="loginForm">
                            <div className="bg-primary rounded p-3 mb-3">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="idPatrulla" placeholder="ID PATRULLA" required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="cuadrante" placeholder="CUADRANTE" required />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">INGRESAR</button>
                        </form>
                        <div className="d-flex justify-content-end mt-4">
                            <img src="/logo.png" alt="Police Badge" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login