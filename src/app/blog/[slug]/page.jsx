import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";

const getData = async (slug) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await response.json();
    return data;
  }

const SinglePostPage = async ({params}) => {
    const {slug} = params;
    const post = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    alt="" 
                    fill 
                    className={styles.img} 
                    src="https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image 
                        className={styles.avatar} 
                        alt="" 
                        width={50} 
                        height={50}
                        src="https://images.pexels.com/photos/30770767/pexels-photo-30770767/free-photo-of-classic-motorcycle-in-kerala-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser user_id={post.userId}/>
                    </Suspense>

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024.</span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage