import { Avatar } from "./Avatar";
import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  // melhor prática é criar e chamar uma função separada e não passar direto a funcionalidade como está lá no button // 
  // function handleLikeComment(){ 
  //   setLikeCount(likeCount + 1);
  // }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Kayke-Fujinaka.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcus Vinícius</strong>
              <time title="06 de Maio às 2:26h" dateTime="2023-05-06 2:27:14">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
          </footer>
      </div>
    </div>
  );
}
