const LogoutForm = () => {
  
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/'
    }
        return (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        )
    };

export default LogoutForm;    