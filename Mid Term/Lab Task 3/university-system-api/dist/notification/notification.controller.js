var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
let NotificationController = class NotificationController {
    notificationService;
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    send(studentName, message) {
        return this.notificationService.sendNotification(studentName, message);
    }
    check(studentName, courseId) {
        return this.notificationService.checkEnrollmentAndNotify(studentName, courseId);
    }
};
__decorate([
    Post('send'),
    __param(0, Body('studentName')),
    __param(1, Body('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "send", null);
__decorate([
    Post('check'),
    __param(0, Body('studentName')),
    __param(1, Body('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "check", null);
NotificationController = __decorate([
    Controller('notification'),
    __metadata("design:paramtypes", [NotificationService])
], NotificationController);
export { NotificationController };
//# sourceMappingURL=notification.controller.js.map