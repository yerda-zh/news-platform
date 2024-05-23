'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  
  interface Post {
    id: number;
    title: string;
    body: string;
    date: string;
    imageUrl: string;
    tag: 'Ақпарат' | 'Әдебиет' | 'Өнер' | 'Ғылым' | 'Эксклюзив' | 'Карьера' | 'Спорт' | 'Тарих';
    comments: Comment[];
    likeCount: number;
  }
  
type PostsState = Post[];

const initialState: PostsState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<Post[]>) => {
      return action.payload;
    },
    addComment: (state, action:  PayloadAction<{ postId: number; comment: Comment }>) => {
        const { postId, comment } = action.payload;
        const post = state.find(p => p.id === postId)
        if (post) {
            post.comments.push(comment);
        }
    },
    updateComment: (state, action: PayloadAction<{ postId: number; commentId: number; updatedComment: Partial<Comment> }>) => {
        const { postId, commentId, updatedComment } = action.payload;
        const post = state.find(p => p.id === postId);
        if (post) {
            const comment = post.comments.find(c => c.id === commentId);
            if (comment) {
              Object.assign(comment, updatedComment);
            }
          }
    },
    deleteComment: (state, action: PayloadAction<{ postId: number; commentId: number }>) => {
        const { postId, commentId } = action.payload;
        const post = state.find(p => p.id === postId);
        if (post) {
          post.comments = post.comments.filter(c => c.id !== commentId);
        }
    }
  },
});
export const { addPosts, addComment, updateComment, deleteComment } = postsSlice.actions;
export default postsSlice.reducer;
