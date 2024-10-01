export default function Footer(props) {
  const { handleToggleModal, data, showModal} = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      {!showModal &&(<button onClick={handleToggleModal} >
        <i className="fa-solid fa-circle-info"></i>
      </button>)}
    </footer>
  );
}
