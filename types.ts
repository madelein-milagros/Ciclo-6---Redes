
export interface Course {
  id: number;
  title: string;
  officialName?: string;
  description: string;
  link?: string;
  certification?: string;
  icon?: string;
  videoUrl?: string;
}

export interface CheckpointData {
  title: string;
  description: string;
}
