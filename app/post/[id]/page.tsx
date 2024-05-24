'use client';
import React, { useState } from 'react'
import Tag from '../../components/tag/Tag'
import { MasonryLayout } from '../../main.styles'
import Card from '../../components/card/Card'
import { DetailedContainer, ButtonsContainer, Button, FacebookIcon, TwitterIcon, VkIcon} from './detailed.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { useParams } from 'next/navigation';
import { BiSolidLike } from "react-icons/bi";
import Comment from '@/app/components/comment/Comment';
import { useRouter, usePathname  } from 'next/navigation';
import { incrementLikeCount, decrementLikeCount, addComment } from '@/app/redux/postsSlice';
import { FacebookShareButton, TwitterShareButton, VKShareButton } from 'react-share';

const Post = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const postId = parseInt(id as string, 10);
  const post = useSelector((state: RootState) => state.posts.find(p => p.id === postId));
  const otherPosts = useSelector((state: RootState) => state.posts).slice(postId, postId + 6);
  const [newComment, setNewComment] = useState<string>('');

  const currentUrl = usePathname();

  const getCardType = (index: number): 'full' | 'plain' | 'partial' => {
    const types: ('full' | 'plain' | 'partial')[] = ['full', 'plain', 'partial'];
    return types[index % types.length];
  };

  const handleCardClick = (id: number): void => {
    router.push(`/post/${id}`);
  };

  const handleLikeClick = () => {
    if(!post?.liked) {
      dispatch(incrementLikeCount(postId));
    } else {
      dispatch(decrementLikeCount(postId));
    }
  }

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

  if (!post)
    return (
      <div
        style={{
          width: "100vw",
          height: "50vh",
          textAlign: "center",
          fontSize: "1.25rem",
          paddingTop: "2rem",
        }}
      >
        Post not found
      </div>
    );
    console.log(post.comments);
  return (
    <>
      <DetailedContainer>
        <h1>{post.title}</h1>
        <div>
          <Tag tag={post.tag} />
          <p>{post.date}</p>
        </div>
        <img src={post.imageUrl} />
        <p className="body-text">{post.body}</p>

        <ButtonsContainer>

          <Button liked={post.liked} onClick={handleLikeClick} buttonType="light">
            <BiSolidLike /> Ұнайды ({post.likeCount})
          </Button>

          <Button buttonType="light">
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon/>
            </FacebookShareButton>{" "}
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon />
            </TwitterShareButton>{" "}
            <VKShareButton url={currentUrl}>
              <VkIcon />
            </VKShareButton>
          </Button>
        </ButtonsContainer>

        <h4>Пікірлер ({post.comments.length})</h4>
        {post.comments.map((comment) => (
          <>
            <Comment
              body={comment.body}
              commentId={comment.id}
              postId={post.id}
              email={comment.email}
              mine={comment.email === "user@example.com"}
            />
            <div className="divider" />
          </>
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
      </DetailedContainer>
      <MasonryLayout
        style={{ background: "var(--color-white)", padding: "6rem 3rem" }}
      >
        {otherPosts.map((post, index) => (
          <Card
            type={getCardType(index)}
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            date={post.date}
            tag={post.tag}
            onClick={() => handleCardClick(post.id)}
          />
        ))}
      </MasonryLayout>
    </>
  );
}

export default Post;