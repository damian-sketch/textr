const LogoutForm = () => {
  
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/'
    }
        return (
            <button data-testid="logout-btn" className="logout-button" onClick={handleLogout}>Logout</button>
        )
    };

export default LogoutForm;    