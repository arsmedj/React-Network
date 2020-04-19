import React from "react";
import style from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        src="https://proexpress.com.ua/wp-content/uploads/2019/05/film-mstiteli-4-obognal-avatar-v-prokate.jpg"
        alt=""
      />
      {props.message}
      <div>likes {props.likesCount}</div>
    </div>
  );
};

export default Post;
