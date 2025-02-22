import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image alt="" fill className={styles.img} src="https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} alt="" width={50} height={50} src="https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024.</span>
                    </div>
                </div>
                <div className={styles.content}>This is the random sentence.</div>
            </div>
        </div>
    )
}

export default SinglePostPage