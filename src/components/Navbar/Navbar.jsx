import './style.css'

export const Navbar = () => {
    return (
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
    )
}
