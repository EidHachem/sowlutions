import { createPortal } from "react-dom";
import classes from "./ImageModal.module.css";

const ImageModal = (props) => {

  return createPortal(
    <>
    <div className={classes.overlay} role="presentation" onClick={props.close}></div>
    <div className={classes.modal}>
      <img src={props.url} alt="product" />
    </div>
    </>,
    document.getElementById("modal")
  );
}

export default ImageModal;