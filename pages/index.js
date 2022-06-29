import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import ReactDOM from "react-dom/client";

const courses = [
  {
    id: 7,
    title: "Kiến Thức Nhập Môn IT",
    slug: "lessons-for-newbie",
    description:
      "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
    image: "courses/7.png",
    icon: "courses/7/6200b81f52d83.png",
    video_type: "youtube",
    video: "M62l1xA5Eu8",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 68373,
    is_pro: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: false,
    user_progress: 0,
    last_completed_at: null,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png",
    video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8",
    is_coming_soon: false,
    is_pre_order: false,
    is_published: true,
  },
  {
    id: 2,
    title: "HTML, CSS từ Zero đến Hero",
    slug: "html-css",
    description:
      "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
    image: "courses/2.png",
    icon: "courses/2/6200aecea81de.png",
    video_type: "youtube",
    video: "R6plN3FvzFY",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 123946,
    is_pro: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: false,
    user_progress: 0,
    last_completed_at: null,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png",
    video_url: "https://www.youtube.com/watch?v=R6plN3FvzFY",
    is_coming_soon: false,
    is_pre_order: false,
    is_published: true,
  },
  {
    id: 3,
    title: "Responsive Với Grid System",
    slug: "responsive-web-design",
    description:
      "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
    image: "courses/3.png",
    icon: "courses/3/6200afe1240bb.png",
    video_type: "youtube",
    video: "uz5LIP85J5Y",
    old_price: 0,
    price: 0,
    pre_order_price: 0,
    students_count: 24636,
    is_pro: false,
    is_selling: false,
    published_at: "2020-02-10T14:23:13.000000Z",
    is_registered: false,
    user_progress: 0,
    last_completed_at: null,
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png",
    video_url: "https://www.youtube.com/watch?v=uz5LIP85J5Y",
    is_coming_soon: false,
    is_pre_order: false,
    is_published: true,
  },
];

function CourseItem({ course }) {
  return (
    <div className="items-alls grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <img src={course.image_url} alt={course.title} />
      <h2 className="post-title">{course.title}</h2>
      <p className="post-description">{course.description}</p>
      <p className="post-published"> {course.published_at} </p>
    </div>
  );
}

function Apps() {
  return (
    <div className="list-news__mains max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

// ahihihihi

export default Apps;
