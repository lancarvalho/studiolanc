
export interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  deployUrl: string;
  thumbnailUrl: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface AppState {
  profile: Profile;
  projects: Project[];
}
