import React from "react";
import { CommentContainer, PersonContainer, ContentContainer, EditContainer, } from "./Comment.styles";
import { MdPerson } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

interface CommentsProps {
  body: string;
  email: string;
  mine: boolean;
}

const Comment: React.FC<CommentsProps> = ({ email, body, mine }) => {
  return (
    <CommentContainer>
      <PersonContainer>
        <MdPerson />
      </PersonContainer>

      <ContentContainer>
        <h6>{email}</h6>
        <p>{body}</p>
      </ContentContainer>

      {mine && (
        <EditContainer>
            <BiSolidPencil />
            <FaTrash color="var(--color-red)" />
        </EditContainer>
      )}
    </CommentContainer>
  );
};

export default Comment;
