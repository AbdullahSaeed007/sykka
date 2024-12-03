import "../../styles/navBar.css";
export default function Navbar() {
  return (
    <div className="nav">
      <h1 className="nav-heading">Dashboard</h1>
      <div className="nav-right-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
          alt="Notifications"
          className="nav-icon"
          onClick={() => alert("Notification clicked")}
        />
        <img
          src="/images/userImages/profile/profile.jpg"
          alt="Profile"
          className="nav-profile"
          onClick={() => alert("Profile clicked")}
        />
      </div>
    </div>
  );
}
