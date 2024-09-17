import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let url='http://localhost:8000/user/datadisplay';
    axios.get(url).then((res)=>{
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  })

  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td> {key.authorname} </td>
        <td> {key.books.map((key1)=>{
            return(
                <>
                <h5> {key1.bookname} </h5>
                <h5> {key1.price} </h5>
                </>
            )
        })} </td>
        <td> <button>Add more</button> </td>
      </tr>
      </>
    )
  })
    return(
        <>
          <h1>This is Display Page</h1>
          <table border='1'>
            <thead>
              <tr>
                <th>Author Name</th>
                <th>Book Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </table>
    
        </>
    )
}

export default Display;