import { EnrollmentService } from '../enrollment/enrollment.service.js';
type Relation<T> = T;
export declare class NotificationService {
    private enrollmentService;
    constructor(enrollmentService: Relation<EnrollmentService>);
    sendNotification(studentName: string, message: string): {
        message: string;
        student: string;
        notification: string;
    };
    checkEnrollmentAndNotify(studentName: string, courseId: string): {
        studentName: string;
        courseId: string;
        enrollments: {
            message: string;
            data: never[];
        };
    };
}
export {};
