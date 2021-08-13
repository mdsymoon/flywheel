import React from "react";
import "./Destination.css";
import { useForm } from "react-hook-form";
import img1 from "../../images/Map.png";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Destination = () => {
  const history = useHistory();
  const handleResult = () => {
    history.push("/Result");
  };
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
          <div className="form-box ">
            <div className="form-center w-100">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Select Location</h4>
                <label>Pick From</label>
                <br />
                <input  {...register("name", { required: true })} />
                <br />
                {errors.name && <span className="error">Name is required</span>}
                <br />
                <label>Pick To</label>
                <br />
                <input {...register("exampleRequired", { required: true })} />
                <br />
                {errors.exampleRequired && <span className="error">This field is required</span>}
                <br />

                <Button type="submit" className="submit">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-7 map">
          <img style={{ margin: "auto" }} className="w-100" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
