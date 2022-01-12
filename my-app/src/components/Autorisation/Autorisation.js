import styles from "./Autorisation.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Autorisation = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset({
      login: "",
      github: "",
      password: "",
      job: "",
      remember: "",
    });
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link to="/login/*"></Link>
      </nav>

      <h2 className={styles.title}>login:</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("login", { required: true, pattern: /^[A-Za-z0-9]+$/i })}
          className={styles.input}
          maxLength="20"
          type="text"
          placeholder="login"
        ></input>
        <input
          {...register("github")}
          className={styles.input}
          maxLength="50"
          type="text"
          placeholder="github"
        ></input>
        <input
          {...register("password", {
            required: true,
            pattern: /^[A-Za-z0-9]+$/i,
          })}
          className={styles.input}
          maxLength="30"
          type="password"
          placeholder="password"
        ></input>
        <div className={styles.jobChecker}>
          <h4>searching for job?</h4>
          <input
            {...register("job")}
            name="jobNeed"
            className={styles.checkbox}
            type="checkbox"
          ></input>
        </div>
        <div className={styles.jobChecker}>
          <h4>remember me</h4>
          <input
            {...register("remember")}
            name="remember"
            className={styles.checkbox}
            type="checkbox"
          ></input>
        </div>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Autorisation;
