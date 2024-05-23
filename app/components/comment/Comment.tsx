'use client';
import React, { useEffect, useState } from "react";
import { CommentContainer, PersonContainer, ContentContainer, EditContainer, } from "./Comment.styles";
import { MdPerson } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { deleteComment, updateComment } from "@/app/redux/postsSlice";

interface CommentsProps {
  commentId: number;
  postId: number;
  body: string;
  email: string;
  mine: boolean;
}

const Comment: React.FC<CommentsProps> = ({ commentId, postId, email, body, mine }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editting, setEditting] = useState<boolean>(false);
  const [comment, setComment] = useState<string>(body);

  const handleRemoveComment = () => {
    dispatch(
      deleteComment({postId, commentId})
    );
    setEditting(false);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleEditComment = () => {
    setEditting(true);
    setComment(body);
  }

  const handleEditSave = () => {
    dispatch(
      updateComment({postId, commentId, updatedComment: comment})
    );
    setEditting(false);
  }

  useEffect(()=>{
    if(!body.length) {
      dispatch(
        deleteComment({postId, commentId})
      );
    }
  },[body]);

  return (
    <CommentContainer>
      <PersonContainer>
        <MdPerson />
      </PersonContainer>

      <ContentContainer  editting = {editting}>
        <h6>{email}</h6>
        <p>{body}</p>
        <input value={comment} onChange={handleCommentChange}/>
      </ContentContainer>

      {mine && (
        <EditContainer editting = {editting}>
          <button onClick={handleEditSave}>өзгерту</button>
          <BiSolidPencil style={{cursor: 'pointer', display: `${editting ? 'none' : ''}`}} onClick={handleEditComment} />
          <FaTrash color="var(--color-red)" style={{cursor: 'pointer'}} onClick={handleRemoveComment}/>
        </EditContainer>
      )}
    </CommentContainer>
  );
};

export default Comment;
