import React from 'react'
import './DashBoard.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Logo } from '../../components/Logo'
import { Aqua } from '../../components/Aqua'

function DashBoard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto px-0">
                    <Navbar />
                </div>
                <div className="col main-content">
                    <div className="d-flex justify-content-center align-items-center">
                        <Logo />
                    </div>
                    <Aqua />
                </div>
            </div>
        </div>
    )
}

export default DashBoard