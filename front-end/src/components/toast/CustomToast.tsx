import { ToastContainer, Toast } from "react-bootstrap"
import { useGlobalContext } from "../../contexts/GlobalContext";


export const CustomToast: React.FC = () => {
    const {handleToastHide, toastBg, toastMessage, showToast} = useGlobalContext();
 
    function capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <ToastContainer position="top-end" className="p-3">
       <Toast bg={toastBg} onClose={() => handleToastHide()} show={showToast} delay={3000} autohide>
        <Toast.Header>
            <strong className="me-auto">{capitalizeFirstLetter(toastBg!)}</strong>
            <small className="text-muted">Just Now</small>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
    </ToastContainer>
    )
}