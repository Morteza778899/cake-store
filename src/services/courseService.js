import config from './config.json'
import { http } from './httpSevice'

export const getCoursesService = ()=>{
    return http.get(`${config.toplearnapi}/get-courses`)
}

export const getSingleCourseService = (id)=>{
    return http.get(`${config.toplearnapi}/get-single-course/${id}`)
}

export const getUrlVideoService = (data)=>{  // data --> key:filename , courseId
    return http.post(`${config.toplearnapi}/get-video`,data)
}

export const getUrlPracticeService = (data)=>{  // data --> key:filename , courseId
    return http.post(`${config.toplearnapi}/get-practice`,data)
}

export const addCourseService = course =>{
    return http.post(`${config.toplearnapi}/dashboard/add-course`,course)
}

export const editCourseService = (id,course) =>{
    return http.put(`${config.toplearnapi}/dashboard/edit-course/${id}`,course)
}

export const deleteCourseService = id =>{
    return http.delete(`${config.toplearnapi}/dashboard/delete-course/${id}`)
}

export const uploadVideoService = (id,video,onUploadProgress) =>{
    return http.post(`${config.toplearnapi}/dashboard/upload-video/${id}`,video,{onUploadProgress})
}

export const uploadPracticeService = (id,video,onUploadProgress) =>{
    return http.post(`${config.toplearnapi}/dashboard/upload-practice/${id}`,video,{onUploadProgress})
}

export const deleteVideoService = (data) =>{  // data --> key:filename , courseId
    return http.put(`${config.toplearnapi}/dashboard/delete-video`,data)
}

export const deletePracticeService = (data) =>{  // data --> key:filename , courseId
    return http.put(`${config.toplearnapi}/dashboard/delete-practice`,data)
}