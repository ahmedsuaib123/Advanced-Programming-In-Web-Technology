import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';
type Relation<T> = T;
export declare class EnrollmentService {
    private courseService;
    private notificationService;
    constructor(courseService: CourseService, notificationService: Relation<NotificationService>);
    enrollStudent(studentName: string, courseId: string): {
        message: string;
        student: string;
        course: {
            message: string;
            id: string;
        };
        notification: {
            message: string;
            student: string;
            notification: string;
        };
    };
    getEnrollments(): {
        message: string;
        data: never[];
    };
}
export {};
