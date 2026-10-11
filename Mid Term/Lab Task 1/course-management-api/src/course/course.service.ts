
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses() {
    return 'Get All Courses';
  }

  getCourseById(id: string) {
    return `Get Course with ID: ${id}`;
  }

  createCourse() {
    return 'Created Course';
  }

  updateCourse(id: string) {
    return `Updated Course ${id} fully`;
  }

  patchCourse(id: string) {
    return `Updated Course ${id} Partially`;
  }

  deleteCourse(id: string) {
    return `Deleted Course ${id} `;
  }
}
