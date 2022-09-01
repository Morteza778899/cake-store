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

export const addCourseService = course =>{
    return http.post(`${config.toplearnapi}/dashboard/add-course`,course)
}

export const editCourseService = (id,course) =>{
    return http.put(`${config.toplearnapi}/dashboard/edit-course/${id}`,course)
}

export const deleteCourseService = id =>{
    return http.delete(`${config.toplearnapi}/dashboard/delete-course/${id}`)
}

export const uploadVideoService = (id,video) =>{
    return http.post(`${config.toplearnapi}/dashboard/upload-video/${id}`,video)
}

export const deleteVideoService = (data) =>{  // data --> key:filename , courseId
    return http.put(`${config.toplearnapi}/dashboard/delete-video`,data)
}