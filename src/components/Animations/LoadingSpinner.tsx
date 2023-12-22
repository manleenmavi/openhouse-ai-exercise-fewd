import styles from "../../styles/LoadingAnimations.module.css"

const LoadingSpinner = () => {
    // Inspired by https://loading.io/css/
    return (
        <div className={`w-full h-full ${styles.ripple} relative`}>
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
