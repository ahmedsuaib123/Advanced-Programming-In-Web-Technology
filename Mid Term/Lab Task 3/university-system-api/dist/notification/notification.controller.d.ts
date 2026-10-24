import { NotificationService } from './notification.service.js';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    send(studentName: string, message: string): {
        message: string;
        student: string;
        notification: string;
    };
    check(studentName: string, courseId: string): {
        studentName: string;
        courseId: string;
        enrollments: {
            message: string;
            data: never[];
        };
    };
}
