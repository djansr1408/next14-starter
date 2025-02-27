import styles from './postUser.module.css';

const getUserData = async (user_id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`, {cache: "no-store"});
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await response.json();
    return data;
  }

const PostUser = async ({ user_id }) => {
    const user = await getUserData(user_id);

    return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
    </div>
  );
}

export default PostUser;