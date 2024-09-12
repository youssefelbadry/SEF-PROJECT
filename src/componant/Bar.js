import { useNavigate} from "react-router-dom";
import React ,{useState , useEffect} from 'react'
function Bar() {
  
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for user data when the component mounts
  useEffect(() => {
    const userData = localStorage.getItem('user'); // Replace 'user' with the key you're using to store user data
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login click
  const handleLogIn = () => {
    navigate('/login');
  };

  // Handle logout click
  const handleLogOut = () => {
    // Clear localStorage (remove user data)
    localStorage.removeItem('user'); // Replace 'user' with the key you're using to store user data
    setIsLoggedIn(false); // Set logged-in state to false
    navigate('/login'); // Redirect to login page or homepage after logout
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom bar">
        <div className="container">
          <div
            className="collapse navbar-collapse"
            id="basic-navbar-nav"
            style={{ display: 'flex', justifyContent: 'end' }}
          >
            <ul className="navbar-nav aaa admin">
              <li className="nav-item">
                {isLoggedIn ? (
                  <a
                    className="nav-link"
                    style={{ cursor: 'pointer' }}
                    onClick={handleLogOut}
                  >
                    LOGOUT
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    style={{ cursor: 'pointer' }}
                    onClick={handleLogIn}
                  >
                    LOGIN
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  
}

export default Bar