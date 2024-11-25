export const LoginForm = () => {
    return (
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
    )
}