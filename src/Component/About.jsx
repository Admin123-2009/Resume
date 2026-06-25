function About() {
  return (
    <div
      id="about"
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
        About Me
      </h1>

      <div
        style={{
          backgroundColor: "#773f8b",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#ffffff",
          }}
        >
          I am currently pursuing a Diploma in Cloud Computing
          and Big Data at Bhausaheb Vartak Polytechnic.
          I am passionate about technology, web development,
          and cloud solutions. I enjoy learning new skills
          and creating user-friendly websites using React.
          I have a strong interest in programming,especially Java.
          I enjoy learing and exploring Java in depth and aim to 
          grow y skills further by building projects and 
          improving my problem-solving abilities.
        </p>
      </div>
    </div>
  );
}

export default About;