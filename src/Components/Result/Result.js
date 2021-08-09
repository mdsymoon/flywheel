import React from "react";
import "./Result.css";
import { useForm } from "react-hook-form";
import img1 from "../../images/Map.png";
import { Button } from "react-bootstrap";


const Result = () => {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Select Location</h4>
                <label >Pick From</label>
              <input {...register("name", { required: true })}  />
              {errors.name && <span className="error">This field is required</span>}<br/>
              <label >Pick To</label>
              <input {...register("exampleRequired", { required: true })}  />
              {errors.exampleRequired && <span className="error">This field is required</span>}<br/>

              <Button type="submit" className="submit" >Search</Button>
            </form>
          </div>
        </div>
        <div className="col-md-7 map">
          <img style={{ margin: "auto" }} className="w-100" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Result;