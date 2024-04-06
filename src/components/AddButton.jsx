import styles from "./AddButton.module.css"
function AddButton()
{
    return(
    <div className={styles.container}>
        <span className={styles.icon}>➕</span>
    </div>
    );
}

export default AddButton;