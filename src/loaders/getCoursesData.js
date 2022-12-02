
export const coursesData = async () => {
    const coursesDataLoad = await fetch('https://harami-riyad-server.vercel.app/courses')
    const allCourses = await coursesDataLoad.json()
  
    return { allCourses }
  }