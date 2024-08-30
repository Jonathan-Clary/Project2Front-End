import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Column() {
  return (
    <section className="vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="11" lg="9" xl="7">
            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                alt="avatar"
                width="65"
                height="65"
              />

              <MDBCard className="w-100">
                <MDBCardBody className="p-4">
                  <div>
                    <MDBTypography tag="h5">Johny Cash</MDBTypography>
                    <p className="small">3 hours ago</p>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus ras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <a href="#!" className="link-muted me-2">
                          <MDBIcon fas icon="thumbs-up me-1" />
                          132
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="thumbs-down me-1" />
                          15
                        </a>
                      </div>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="reply me-1" /> Reply
                      </a>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                alt="avatar"
                width="65"
                height="65"
              />

              <MDBCard className="w-100">
                <MDBCardBody className="p-4">
                  <div>
                    <MDBTypography tag="h5">Mindy Campbell</MDBTypography>
                    <p className="small">5 hours ago</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus cumque doloribus dolorum dolor repellat nemo
                      animi at iure autem fuga cupiditate architecto ut quam
                      provident neque, inventore nisi eos quas?
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <a href="#!" className="link-muted me-2">
                          <MDBIcon fas icon="thumbs-up me-1" />
                          158
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="thumbs-down me-1" />
                          13
                        </a>
                      </div>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="reply me-1" /> Reply
                      </a>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}