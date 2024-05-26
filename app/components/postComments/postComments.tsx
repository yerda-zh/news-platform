// components/PostComments.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';
import { addComment } from '@/app/redux/postsSlice';
import Comment from '../comment/Comment';
import { Button } from '../button/Button';
import { CommentsContainer } from './postComments.styles';

interface PostCommentsProps {
  postId: number;
  comments: any[];
}

const PostComments: React.FC<PostCommentsProps> = ({ postId, comments }): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentId = Date.now();
      dispatch(
        addComment({
          postId,
          comment: {
            postId,
            id: newCommentId,
            name: "User Name",
            body: newComment,
            email: "user@example.com",
          },
        })
      );
      setNewComment(""); // Clear the textarea after adding the comment
    }
  };

  return (
    <CommentsContainer>
      <h4>Пікірлер ({comments.length})</h4>
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <Comment
            body={comment.body}
            commentId={comment.id}
            postId={postId}
            email={comment.email}
            mine={comment.email === "user@example.com"}
          />
          <div className="divider" />
        </React.Fragment>
      ))}

      <textarea
        placeholder="Пікіріңізді жазыңыз..."
        value={newComment}
        onChange={handleCommentChange}
      />
      <Button
        style={{ marginLeft: "auto" }}
        buttonType="dark"
        onClick={handleAddComment}
      >
        Қосу
      </Button>
    </CommentsContainer>
  );
};

export default PostComments;