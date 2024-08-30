import { Button, Modal } from "react-bootstrap";
import { HotelInterface } from "../../interfaces/HotelInterface";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import createAxiosInstance from "../../services/AxiosInstance";
import { MDBTextArea } from "mdb-react-ui-kit";
import ReactStars from "react-rating-stars-component";
function ReviewComponent(hotels: HotelInterface) {
  const [show, setShow] = useState(false);
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const postReview = async () => {
    const response = await axiosInstance.post("/reviews", {
      userId: user?.userId,
      hotel: hotels,
      stars: stars,
      reviewText: reviewText,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between ">
        <Button variant="dark" onClick={handleShow}>
          Leave a Review
        </Button>
        <div
          className="d-flex flex-column justify-content-center align-items-center p-1"
          style={{ height: "2.5rem" }}
        >
          <span></span>
        </div>
      </div>

      <Modal
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Leave a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="">
            <MDBTextArea
              placeholder="How was your trip?"
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
            />
          </section>
          <ReactStars
            count={5}
            onChange={setStars}
            size={24}
            activeColor="#ffd700"
          />
          ,
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={postReview}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ReviewComponent;
