import "../styles/confirmation.scss";

function Confirmation({ onConfirmar, onCancelar }) {
  return (
    <>
      <div className="background-container"></div>
      <div className="container-confirmation">
        <div className="confirmation-box">
          <h1>Confirma o envio?</h1>
          <div className="answer">
            <button className="check yes" onClick={onConfirmar}>
              Sim
            </button>
            <button className="check no" onClick={onCancelar}>
              Não
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
