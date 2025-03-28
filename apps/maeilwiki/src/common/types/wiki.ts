import { WIKI_CATEGORY, WIKI_CATEGORY_TAB_OPTION } from '../constants/wikiCategory';

export type Member = AnonymousMember | IdentifiedMember;

interface AnonymousMember {
  id: number;
  profileImage: null;
  name: null;
  github: null;
}

interface IdentifiedMember {
  id: number;
  profileImage: string;
  name: string;
  github: string;
}

export interface WikiComment {
  id: number;
  answer: string;
  owner: Member;
  createdAt: string;
  likeCount: number;
  isLiked: boolean;
}

export interface Wiki {
  id: number;
  question: string;
  questionDetail?: string;
  category: WikiCategory;
  owner: Member;
  createdAt: string;
  comments: WikiComment[];
}

export type WikiListItem = Omit<Wiki, 'questionDetail' | 'comments'> & { commentCount: number };

export type WikiCategory = keyof typeof WIKI_CATEGORY;

export type WikiCategoryTabOption = keyof typeof WIKI_CATEGORY_TAB_OPTION;
