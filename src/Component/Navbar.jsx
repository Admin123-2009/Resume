function Navbar() {
  return (
    <div
      style={{
        background: "#E9D5FF",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <h2
        style={{
          color: "#6B21A8",
          margin: "0",
          fontWeight: "bold",
        }}
      >
        Dhanashree
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;