import http from './httpSevice'
import config from './config.json'

export const getCoursesService = ()=>{
    return http.get(`${config.toplearnapi}/api/courses`)
}

export const getSingleCourseService = (id)=>{
    return http.get(`${config.toplearnapi}/api/course/${id}`)
}

export const addCourseService = course =>{
    return http.post(`${config.toplearnapi}/api/course`,course)
}

export const deleteCourseService = id =>{
    return http.delete(`${config.toplearnapi}/api/course/${id}`)
}

export const updateCourseService = (id,course) =>{
    return http.put(`${config.toplearnapi}/api/course/${id}`,course)
}