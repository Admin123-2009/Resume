function Contact() {
  return (
    <div
      id="contact"
      style={{
        padding: "80px 10%",
        backgroundColor: "#F5F3FF",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#6B21A8",
          marginBottom: "40px",
        }}
      >
        Contact Me
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "600px",
          margin: "auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ marginBottom: "15px", color: "#555" }}>
          <strong>Email:</strong>
          <br />
          dhanashreevaze32@gmail.com
        </p>

        <p style={{ marginBottom: "15px", color: "#555" }}>
          <strong>Contact No:</strong>
          <br />
          +91 9356460744
        </p>

        <p style={{ color: "#555" }}>
          Feel free to reach out for collaboration or internship opportunities.
        </p>
      </div>
    </div>
  );
}

export default Contact;