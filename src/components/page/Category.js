import React, {Component} from 'react';
import MyCard from "../MyCard";
import { Row,Col } from 'antd';

class Category extends Component {
    render() {
        return (
            <div>
                <h2>Technology</h2>
                <h5>There are many events here. Lets join us.</h5>
                <hr/>
                <br/>
                <Row gutter={16} justify="center" type="flex">
                    <Col lg={7} md={12}>
                        <MyCard 
                            alt="GOCIN" 
                            img="images/portofolio/1.png"
                            title="tech"
                            description="blablabla 2019"
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="KADOKU" 
                            img="images/portofolio/2.png"
                            title="KADOKU"
                            description="Try Out 2018"                            
                        />
                    </Col>                    
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Judul" 
                            img="images/portofolio/3.png"
                            title="jksahfieba"
                            description="Try Out 2018"                            
                        />
                    </Col>
                
                </Row>
            </div>
        );
    }
}

export default Category;