// components 
import React from 'react';
import Tag from '../tag/Tag';
import { PostDetailsContainer, ButtonsContainer, FacebookIcon, TwitterIcon, VkIcon } from './postDetails.styles';
import { Button } from '../button/Button';
import { FacebookShareButton, TwitterShareButton, VKShareButton } from 'react-share';
import { BiSolidLike } from "react-icons/bi";
import useSocialShare from '@/app/hooks/useSocialShare';

interface PostDetailsProps {
  post: any;
  onLikeClick: () => void;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post, onLikeClick }) => {
  const currentUrl = useSocialShare();
  console.log(currentUrl);

  return (
    <PostDetailsContainer>
      <h1>{post.title}</h1>

      <div className='info'>
        <Tag tag={post.tag}/>
        <p>{post.date}</p>
      </div>

      <img src={post.imageUrl} />
      <p className="body-text">{post.body}</p>

      <ButtonsContainer>
        <Button liked={post.liked} onClick={onLikeClick} buttonType="light">
          <BiSolidLike /> Ұнайды ({post.likeCount})
        </Button>

        <Button buttonType="light">
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon />
          </FacebookShareButton>{" "}
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon />
          </TwitterShareButton>{" "}
          <VKShareButton url={currentUrl}>
            <VkIcon />
          </VKShareButton>
        </Button>
        
      </ButtonsContainer>

    </PostDetailsContainer>
  );
};

export default PostDetails;
