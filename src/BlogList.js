import { Link } from 'react-router-dom';
import styled from 'styled-components';
const BlogList = ({ blogs }) => {
  return (
    <CarsContainer>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
               <div className="cars">
        <div className="caryear">
        <span>Monday,  12:45</span>
        <p>{blog.name}  ({blog.price})</p>
        </div>
   <div  className="carimg">
     <img src={blog.image}  alt="dtimg"/>
     </div>

        <div className="carinfo">
        <div className="carinfos">
          <span>Milliage: <span>{blog.price} Km</span></span> 
          <span>Location:  <span>{blog.company} </span> </span>
          </div>
          <div className="carinfos">
          <span>Engine:  <span>{blog.category} </span></span> 
          <span>Transmission: <span> Machine</span></span>
          </div>
        </div>
     
        <div className="carfooter">
          <span>{blog.price} $</span>
          <Link to={`/blogs/${blog.id}`}>
          <span>More Details</span>
          </Link>
        </div>
      </div>
           

      
        </div>
      ))}
  
    </CarsContainer>
  );
}
 
export default BlogList;

const CarsContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color: rgb(246,246,246);

.cars {
    width: 300px;
    height: auto;
    background-color: rgb(255,255,255);
    padding: 15px;
    margin-left: 10px;
    margin-top: 15px;
    border-radius: 10px;
}

.carimg {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 300px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  height: auto;
  border-radius: 15px;
  background-size: cover;
};
.caryear {
  padding-left: 10px;
  color: white;
}
.caryear span {
  color: #9E9FA6;
}
.caryear p {
  color: black;
  text-transform: uppercase;
}
.carinfo {
  padding: 10px;
  color: #9E9FA6;
}
.carinfos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.carinfos span span {
  color: black;
}
.carfooter {
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.carfooter span {
  color: black;
  font-size: 18px;
}
a {
  text-decoration: none;
  color: white;
  background-color: red;
  padding: 10px;
}


`

