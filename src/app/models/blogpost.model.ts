import { FileUploadModel } from "../dashboard/dash-models/file-handle.model";

export interface BlogPostModel {

  _id?: string ;
  title: string | '';
  subTitle: string |'';
  slug: string |'';
  content: string|'';
  author?: AuthorModel;
  date: string |'';
  tags: string[];
  category: string |'';
  status: PostStatusEnum;
  featuredImage: string |'';
  comments: Comment[];
  likes?: string |'';
  dislikes?: string |'';
  views?: number |0;
  images?: FileUploadModel [];

}

export interface AuthorModel {
  _id?: String;
  name?: string |'';
  email?: string |'';
  avatar?: string |'';
}

export interface CategoryModel {
  _id?: string;
  name: string |'';
  slug: string |'';
  date?: string |'';
}
export interface TagsModel {
  _id?: string;
  tagTitle: string |'';
  tagSlug: string |'';
  tagDate?: string |'';
}
export interface CommentModel {
  _id?: string;
  author?: AuthorModel;
  content?: string |'';
  date?: string |'';
  likes?: string |'';
}

export enum PostStatusEnum {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
}


// export function generateTitleSlug(title: string): string {
//   // Convert the title to lowercase and replace spaces with hyphens
//   const slug = title.toLowerCase().replace(/\s+/g, '-');

//   // Remove special characters and non-alphanumeric characters
//   const cleanSlug = slug.replace(/[^a-z0-9-]/g, '');

//   return cleanSlug;
// }

export function generateTitleSlug(title: string): string {
  // Split the title into words
  const words = title.toLowerCase().split(' ');

  // Take the first 10 words and join them with hyphens
  const slug = words.slice(0,30).join('-');

  // Remove special characters and non-alphanumeric characters
  const cleanSlug = slug.replace(/[^a-z0-9-]/g, '');

  return cleanSlug;
}
export function generateCategorySlug(name: string): string {
  // Split the title into words
  const words = name.toLowerCase().split(' ');

  // Take the first 10 words and join them with hyphens
  const slug = words.slice(0,30).join('-');

  // Remove special characters and non-alphanumeric characters
  const cleanSlug = slug.replace(/[^a-z0-9-]/g, '');

  return cleanSlug;
}