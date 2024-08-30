import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { ReviewInterface } from "../../interfaces/ReviewInterface";
import createAxiosInstance from "../../services/AxiosInstance";
import { useAuth } from "../../contexts/AuthContext";

interface User {
    userId : string,
    firstName : string,
    lastname : string,
    email : string 
  }
export default function Column(review:ReviewInterface) {
    const [users, setUsers] = useState<User>({
        userId : '',
        firstName : '',
        lastname : '',
        email : '' 
      })
    const { user, token } = useAuth();
    const axiosInstance = createAxiosInstance(token);
    const getUser = async () => {
        const response = await axiosInstance.get("/user/" + user?.userId);
        setUsers(response.data);
        
      };
      useEffect(() => {
        getUser()
        
    }, [])
  return (
    <section className="">
      <MDBContainer className="" style={{ maxWidth: "1000px" }}>
        <MDBCard className="w-100">
                <MDBCardBody className="p-4">
                 
                    <MDBTypography tag="h5">{users.firstName}</MDBTypography>
                    <p className="small">{review.stars} Stars</p>
                    <p>
                      {review.reviewText}
                    </p>
                </MDBCardBody>
              </MDBCard>
      </MDBContainer>
    </section>
  );
}

