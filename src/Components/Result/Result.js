import React, { useState } from "react";
import "./Result.css";
import { useForm } from "react-hook-form";
import img1 from "../../images/Map.png";
import { Button } from "react-bootstrap";


const Result = () => {
const [inputData, setData] = useState();

const handleData = () => {
const newData = {setData};
fetch('http://localhost:3001/rider',{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(newData)
})
.then(res  => res.json())
.then(data => {
  console.log(data);
})

}

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="destination-page">
      <div className="row container form">
        <div className="col-md-4 pickup-form">
          <div className="input-box ">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <h4>Select Location</h4>
                <label >Pick From</label>
              <input type="text" name="name" value={inputData} {...register("name", { required: true })}  />
              {errors.name && <span className="error">This field is required</span>}<br/>
              <label >Pick To</label>
              <input {...register("exampleRequired", { required: true })}  />
              {errors.exampleRequired && <span className="error">This field is required</span>}<br/>

              <Button onClick={handleData} type="submit" className="submit" >Search</Button>
            </form>
          </div>
        </div>
        
        <div className="col-md-7 map">
          <img style={{ margin: "auto" }} className="w-100" src={img1} alt="" />
          <h1>it is result</h1>
        </div>
      </div>
    </div>
  );
};

export default Result;