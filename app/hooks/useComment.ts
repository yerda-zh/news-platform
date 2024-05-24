import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { deleteComment, updateComment } from "@/app/redux/postsSlice";

const useCommentHandlers = (commentId: number, postId: number, initialBody: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editting, setEditting] = useState<boolean>(false);
  const [comment, setComment] = useState<string>(initialBody);

  // to remove comment from redux state
  const handleRemoveComment = () => {
    dispatch(deleteComment({ postId, commentId }));
    setEditting(false);
  };

  // to change comment state when the input field changes
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  // to open input field and hide edit button, while setting input field to comment's value
  const handleEditComment = () => {
    setEditting(true);
    setComment(initialBody);
  };

  // to update comment in the redux state
  const handleEditSave = () => {
    dispatch(updateComment({ postId, commentId, updatedComment: comment }));
    setEditting(false);
  };

  return {
    editting,
    comment,
    handleEditComment,
    handleEditSave,
    handleRemoveComment,
    handleCommentChange,
  };
};

export default useCommentHandlers;
