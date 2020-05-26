export class CoursesServices{
    course = {
        title: "The complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia hic blanditiis modi molestias est dolores facere nesciunt eveniet suscipit!"
    }
    getCourses(){
        return ['Maths', 'English', 'Computer'];
    }
}