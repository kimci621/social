import styles from "./Autorisation.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Autorisation = (props) => {
  let [capthcaStatus, setCaptchaStatus] = useState(false);

  useEffect(() => {
    if (props.captcha) {
      console.log(props.captcha);
      setCaptchaStatus(true);
    }
  }, [props.captcha]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  // "kimciwork@gmail.com", "k5uHUcEagwv_ieV"
  const onSubmit = (data) => {
    props.loginPostThunk(
      data.email,
      data.password,
      data.remember,
      data.captcha
    );
    reset({
      login: "",
      github: "",
      password: "",
      job: "",
      remember: "",
    });
  };

  const CaptchaCase = () => {
    if (capthcaStatus === true) {
      return (
        <div>
          <img src={props.captcha} alt="captcha"></img>
          <p></p>
          <input
            type="text"
            name="captcha"
            placeholder="Please type captcha here:"
            {...register("captcha", {
              required: true,
            })}
          ></input>
        </div>
      );
    } else {
      return <></>;
    }
  };

  if (props.login != null) {
    return <Navigate to="/profile"></Navigate>;
  }

  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="/login/*"></Link>
      </nav>

      <h2 className={styles.title}>login:</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        {errors.email && (
          <span className="errorSpan">
            required field! Entered value does not match email format.!
          </span>
        )}
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
            },
          })}
          className={styles.input}
          maxLength="50"
          type="text"
          placeholder="email@test.com"
        ></input>
        {errors.password && (
          <span className="errorSpan">required password from 8 symbols!</span>
        )}
        <label>password</label>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
          })}
          className={styles.input}
          maxLength="50"
          type="password"
          placeholder="min length 8 symbols"
        ></input>
        <div className={styles.jobChecker}>
          <h4>remember me</h4>
          <input
            {...register("remember")}
            name="remember"
            className={styles.checkbox}
            type="checkbox"
          ></input>
        </div>
        <CaptchaCase register={register} />

        <button type="submit" disabled={!isValid} onClick={() =>{props.thunkProfile(props.savedOwnId)}}>
          send
        </button>
      </form>
    </div>
  );
};

export default Autorisation;
