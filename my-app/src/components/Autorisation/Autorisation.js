import styles from "./Autorisation.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
const Autorisation = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
  // "kimciwork@gmail.com", "k5uHUcEagwv_ieV"
  const onSubmit = (data) => {
    props.loginPostThunk(data.email, data.password, data.remember);
    reset({
      login: "",
      github: "",
      password: "",
      job: "",
      remember: "",
    });
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
        {errors.email && <p>required field! Please type correct e-mail!</p>}
        <input
          {...register("email", { required: true})}
          className={styles.input}
          maxLength="50"
          type="text"
          placeholder="email@test.com"
        ></input>
        {errors.password && <p>required password from 8 symbols!</p>}
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
        <button type="submit" disabled={!isValid}>
          send
        </button>
      </form>
    </div>
  );
};

export default Autorisation;
