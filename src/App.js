import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
 const data=[
  {
    productname:"Fancy Product",
    productimage:"https://www.gizmochina.com/wp-content/uploads/2021/03/OnePlus-9R-Featured-1-2.jpg",
    rating:"25",
    price:"$40.00 - $80.00",
  },
  {
    productname:"Special Item",
    productimage:"https://media.wired.com/photos/59548e5d38978176dacc6308/master/w_2500,c_limit/samsung-story1.jpg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20.00 $18.00",
  },
  {
    productname:"Sale Item",
    productimage:"https://ultimoelectronics.co.uk/wp-content/uploads/2020/01/iPhone-8-Plus-Silver.jpg",
    rating:"53",
    price:"60000",
  },
  {
    productname:"Popular Item1",
    productimage:"https://ultimoelectronics.co.uk/wp-content/uploads/2020/01/iPhone-8-Plus-Silver.jpg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$40.00",
  },
  {
    productname:"Fancy Product1",
    productimage:"https://www.gizmochina.com/wp-content/uploads/2021/03/OnePlus-9R-Featured-1-2.jpg",
    rating:"25",
    price:"$40.00 - $80.00",
  },

  {
    productname:"Special Item1",
    productimage:"https://media.wired.com/photos/59548e5d38978176dacc6308/master/w_2500,c_limit/samsung-story1.jpg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$20.00 $18.00",
  },

  {
    productname:"Sale Item1",
    productimage:"https://ultimoelectronics.co.uk/wp-content/uploads/2020/01/iPhone-8-Plus-Silver.jpg",
    rating:"53",
    price:"60000",
  },
  {
    productname:"Popular Item",
    productimage:"https://ultimoelectronics.co.uk/wp-content/uploads/2020/01/iPhone-8-Plus-Silver.jpg",
    rating:"⭐⭐⭐⭐⭐",
    price:"$40.00",
  }
 ];
 const show = true;

 return (
  <div classname="App">
    {data.map((value, idx) =>(
  <Card key={idx} style={{ width: '18rem' }}>
           <Card.Img variant="top" src={value.productimage} />
           <Card.Body>
             <Card.Title>{value.productname}</Card.Title>
             <Card.Text>
              {value.price}
             </Card.Text>
             <Card.Text>
              {value.rating}
             </Card.Text>
  
             <Button
              variant="primary"
              onClick={()=>console.log("buy clicked")}
              >Add to cart</Button>{" "}
  
  
             {show ? <Button
             variant="danger"
             onClick={()=>console.log("remove clicked")}
             >remove cart</Button>: ""}
           </Card.Body>
         </Card>

 ))}

 </div>
 );
}
          

export default App;

  