import styles from '~/styles/Login.module.css'

const Login = () => {
    return(
        <>
            <div>
                <label className={styles.text}>User</label>
                <input type="text" className={styles.input} />
            </div>
            <div>
                <label className={styles.text}>Password</label>
                <input type="password" className={styles.input} />
            </div>
        </>
        
    )
}

export default Login