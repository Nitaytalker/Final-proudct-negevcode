import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import CheckboxLabels from "../checkbox"


function AllProudcts(props) {
    const items = [];

    props.proudcts.map((proudct, index) => {
        items.push((<MDBCol key={index} md={4} >
            <MDBCard>
                <MDBCardImage src={proudct.img[0]} alt="MDBCard image cap" top hover
                    overlay="dark-slight" />
                <MDBCardBody style={{
                    backgroundColor: '#2E2E2E',
                    color: '#ff4444'
                }}>
                    <MDBCardTitle tag="h5" >{proudct.name}</MDBCardTitle>
                    <hr className='hr-light' />
                    <MDBCardText>
                        price: {proudct.price}$
                    </MDBCardText>
                    <MDBCardText> </MDBCardText>
                    <MDBBtn color="danger" size="md">Go</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>))

    })

    const filter = [];
    props.filters.map((item, index) => {
        filter.push(<CheckboxLabels key={index} text={item} />)
    })

    return (
        <div className='allproudcts'>
            <h1>All products </h1>

            <MDBContainer style={{marginLeft:"0"}} lg='true' >
                <MDBRow>

                    <MDBCol md={3}  >
                        <MDBContainer >
                        
                            <MDBCol md={2} style={{  position: "fixed" }}  >
                            <MDBCard wide cascade >
                                <h3>filters</h3>
                                {filter}
                                </MDBCard>
                            </MDBCol>
                            
                        </MDBContainer>

                    </MDBCol>
                    <MDBCol>
                        <MDBCardGroup>
                            {items}
                            {/* <Smallproudct proudcts={props}/> */}
                        </MDBCardGroup>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default AllProudcts;