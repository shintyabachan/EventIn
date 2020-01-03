import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Menu, Icon} from 'antd';
import MyCard from "../MyCard";


class Event extends Component {
    render() {
        return (
            <div>
                 <Row
                    style={{ 
                        margin: '16px 0', 
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        paddingBottom: "50px",
                    }}                 
                 >
                   

                </Row>
                <Row gutter={16} justify="center" type="flex">
                    <Col lg={7} md={12}>
                        <MyCard 
                            alt="Judul" 
                            img="images/portofolio/1.png"
                            title="blablablablablabba"
                            description="tgl/bln/th"
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Judul" 
                            img="images/portofolio/2.png"
                            title="blablablalba"
                            description="2014-2017"                            
                        />
                    </Col>                    
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Judul" 
                            img="images/portofolio/3.png"
                            title="blablablalbla"
                            description="31/12/2019"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Judul" 
                            img="images/portofolio/5.png"
                            title="blabbabllablalblablalbalb"
                            description="45/6/2020"                            
                        />
                    </Col>
                    <Col lg={7} md={12}>                        
                        <MyCard 
                            alt="Judul" 
                            img="images/portofolio/6.png"
                            title="sajkdfyeugfkashsc"
                            description="2003-2005"                            
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Event;