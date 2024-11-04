
export interface Enrollment {
    user: {
      email: string;
    };
    course: {
      id: number;
      courseName: string;
      videoUrl:string;
      description:string;
    };
    status: string;
    progress: number;
    startDate: string;
    completionDate: string;
  }