import React from 'react'
import { Row,Col,Button } from 'antd';
  
class Home extends React.Component{       
    render(){
        return(
            <div>
               <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }}                 
                 >
                    <Col xs={10}
                        style={{ 
                            margin: '40px 30px',
                        }}  
                    >
                        <h1 style={{ margin:"0"}}>Finally,</h1>
                        <h1 style={{color:"#ef4b6c"}}> <b>a way to find best event nearby</b></h1>
                        <p/><p/>
                        <h4>"You can find the best event nearby, and you can create an event here."</h4>
                        <p></p>
                        <Button href="profile">I want to participate</Button>
                        <Button href="profile">I want to organize</Button>
                    </Col>

                    <Col xs={12}>
                        <Row>
                            <p/>
                        </Row>
                        <Row>
                            <img src="images/Group.svg" style={{width:"90%"}} alt="asd"/>
                        </Row><Row>
                            <p/>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;