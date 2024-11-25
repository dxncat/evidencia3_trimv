import React from 'react'
import { Logo } from '../components/Logo'
import { LoginForm } from '../components/LoginForm'
import { Aqua } from '../components/Aqua'

function Login() {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="bg-white rounded-lg shadow p-4 p-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                        <Logo />
                    </div>
                    <div className="col-md-6">
                        <div className="text-center text-md-start mb-4">
                            <h1 className="text-primary display-4 fw-bold">SICRP</h1>
                            <p className="text-muted small">
                                SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICÍA
                            </p>
                        </div>
                        <LoginForm />
                        <Aqua />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login