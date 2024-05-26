'use client';
import React from "react";
import { CommentContainer, PersonContainer, ContentContainer, EditContainer, DeleteButton, EditButton, } from "./Comment.styles";
import { MdPerson } from "react-icons/md";
import useCommentHandlers from "@/app/hooks/useComment";

interface CommentsProps {
  commentId: number;
  postId: number;
  body: string;
  email: string;
  mine: boolean;
}

const Comment: React.FC<CommentsProps> = ({ commentId, postId, email, body, mine }): JSX.Element => {
  const {
    editting,
    comment,
    handleEditComment,
    handleEditSave,
    handleRemoveComment,
    handleCommentChange,
  } = useCommentHandlers(commentId, postId, body);

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
          <EditButton editting = {editting} onClick={handleEditComment} />
          <DeleteButton onClick={handleRemoveComment}/>
        </EditContainer>
      )}
    </CommentContainer>
  );
};

export default Comment;
