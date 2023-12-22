import styles from "../../styles/LoadingAnimations.module.css";

const LoadingEllipsis  = () => {
  // Inspired by https://loading.io/css/
  return (
    <div className={`w-full h-full ${styles.ellipsis}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingEllipsis ;
