import { CourseService } from './course.service.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): string;
    getCourseById(id: string): string;
    createCourse(): string;
    updateCourseFully(id: string): string;
    patchCourse(id: string): string;
    deleteCourse(id: string): string;
}
