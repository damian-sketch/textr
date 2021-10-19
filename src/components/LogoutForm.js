const LogoutForm = () => {
  
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login'
    }
        return (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        )
    };

export default LogoutForm;    