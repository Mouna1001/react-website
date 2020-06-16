import React ,{Component} from 'react';
import SingleService from './SingleService';
const services =[
    {title: 'E-Commerce',description:' From the least to the greatest of these, than the great explorer of the architect to whom, he has brought not allow it.',icon:'fa-shooping-cart'},
    {title: 'Responsive Design',description:'From the least to the greatest of these, than the great explorer of the architect to whom, he has brought not allow it.',icon:'fa-laptop'},
    {title: 'Web Security',description:'dicta impeFrom the least to the greatest of these, than the great explorer of the architect to whom, he has brought not allow it.',icon:'fa-lock'}
];
class Services extends Component{
    render(){
        return(
       <section className="page-section" id="services">
       <div className="container">
       <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        {services.map((service,index)=>{
            return <SingleService {...service} key={index}/>
        })

        }
        
       
      </div>
    </div>
  </section>
        )
    }
}
export default Services;