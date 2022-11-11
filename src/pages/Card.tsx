import logo from "../assets/logo.svg";
import explorer from "../assets/explorer.svg";
import * as Styles from "./styles";
function Card() {
  return (
    <Styles.Container>
      <div className="card">
        <header className="header">
          <img src={logo} alt="logo" />
        </header>

        <div className="explorer">
          <img src={explorer} alt="explorer" className="explorer" />
          <img
            src="https://github.com/leticiasantanna.png"
            alt="foto leticia"
            className="photo"
          />
        </div>
        <div className="description">
          <h1>Letícia Sant'anna</h1>
          <p>Front-end Developer at Escola Conquer</p>
        </div>
      </div>
    </Styles.Container>
  );
}

export default Card;
