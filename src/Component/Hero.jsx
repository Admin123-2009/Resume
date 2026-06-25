function Hero() {
  return (
    <div
      id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        padding: "50px",
        background:
          "linear-gradient(to right,#F5F3FF,#E9D5FF)",
      }}
    >
      {/* LEFT IMAGE */}

      <div>
        <img
          src="myimg.jpg"
          alt="Dhanashree"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "8px solid white",
            boxShadow:
              "0px 0px 25px rgba(168,85,247,0.5)",
          }}
        />
      </div>

      {/* RIGHT CONTENT */}

      <div
        style={{
          maxWidth: "600px",
        }}
      >
        <h3
          style={{
            color: "#7E22CE",
            marginBottom: "10px",
          }}
        >
          Hello, I'm
          <br/>
        </h3>

        <h1
          style={{
            fontSize: "60px",
            color: "#581C87",
            margin: "0",
          }}
        >
          Dhanashree Vaze
          <br/>
        </h1>

        <h2
          style={{
            color: "#9333EA",
            marginTop: "10px",
          }}
        >
          <br/>
          Cloud Computing & Big Data Student
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4B5563",
            marginTop: "20px",
          }}
        >
          I am a passionate student pursuing a
          Diploma in Cloud Computing and Big Data.
          I enjoy learning modern technologies,
          building responsive websites and exploring
          innovative cloud solutions.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            style={{
              background: "#9333EA",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "25px",
              cursor: "pointer",
            }}
          >
           View Projects
          </button>

          <button
            style={{
              background: "white",
              color: "#9333EA",
              border: "2px solid #9333EA",
              padding: "12px 25px",
              borderRadius: "25px",
              cursor: "pointer",
            }}
          >
            Conatct Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;