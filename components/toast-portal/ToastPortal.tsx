import { useToastPortal } from "../../hooks";
import ReactDOM from 'react-dom';

const ToastPortal = () => {
    
    const { loaded, portalId } = useToastPortal();

    return loaded ? (
        ReactDOM.createPortal(
            <div>Toasty</div>,
            document.getElementById(portalId)!
        )
    ) : (
        <></>
    );
}

export default ToastPortal;