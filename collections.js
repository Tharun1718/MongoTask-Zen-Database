// below collections are present in a database named mongodatabase

// inserting users collection 
db.users.insertMany([
    {
        user_id : 1,
        name : "Tharun Manogaran",
        email: "tharunmano@gmail.com",
        codekata:[1,3,4,7],
        tasks_submitted:[{
            task_id: 1,
            submitted_date : new Date("19-oct-2020")
        }],
        absent_on:[new Date("18-oct-2020")],
        company_drives:[1,2]
    },
    {
        user_id : 2,
        name : "Rahul",
        email: "rahul@gmail.com",
        codekata:[1,2],
        tasks_submitted:[{
            task_id: 3,
            submitted_date : new Date("29-oct-2020")
        }],
        absent_on:[new Date("12-oct-2020")],
        company_drives:[1]
    },
    {
        user_id : 3,
        name : "Shalini",
        email: "shalu456@gmail.com",
        codekata:[5,6,7],
        tasks_submitted:[{
            task_id: 2,
            submitted_date : new Date("14-oct-2020")
        }],
        absent_on:[],
        company_drives:[3,4]
    },
    {
        user_id : 4,
        name : "Vimal kumar",
        email: "vimalk34@gmail.com",
        codekata:[5,3,6,1],
        tasks_submitted:[{
            task_id: 4,
            submitted_date : new Date("21-oct-2020")
        }],
        absent_on:[new Date("10-oct-2020")],
        company_drives:[1,2,3,4]
    },
    {
        user_id : 5,
        name : "Abinaya",
        email: "abhinayamoorthy@gmail.com",
        codekata:[1,2],
        tasks_submitted:[{
            task_id: 3,
            submitted_date : new Date("26-oct-2020")
        }],
        absent_on:[new Date("28-oct-2020")],
        company_drives:[4]
    },
    {
        user_id : 6,
        name : "Dheena",
        email: "dheenadheena@gmail.com",
        codekata:[3,5,7],
        tasks_submitted:[{
            task_id: 4,
            submitted_date : new Date("24-oct-2020")
        }],
        absent_on:[],
        company_drives:[4]
    }
])

// inserting codekata collection
db.codekata.insertMany([
    {
        ques_id : 1,
        category: "basic",
        level : "easy"
    },
    {
        ques_id : 2,
        category: "strings",
        level : "intermediate"
    },
    {
        ques_id : 3,
        category: "array",
        level : "intermediate"
    },
    {
        ques_id : 4,
        category: "looping",
        level : "intermediate"
    },
    {
        ques_id : 5,
        category: "data structures",
        level : "easy"
    },
    {
        ques_id : 6,
        category: "data structures",
        level : "intermediate"
    },
    { 
        ques_id : 7,
        category: "advanced data structures",
        level : "hard"
    },
])

// inserting topics collection
db.topics.insertMany([
    {
        topic_id : 1,
        topic_name : "ReactJs",
        taken_date : new Date("2020-10-17"),
        task:{
            date_of_task : new Date("2020-10-19")
        }
    },
    {
        topic_id : 2,
        topic_name : "NodeJs",
        taken_date : new Date("2020-10-27"),
        task:{
            date_of_task : new Date("2020-10-29")
        }
    },
    {
        topic_id : 3,
        topic_name : "DSA",
        taken_date : new Date("2020-11-11"),
        task:{
            date_of_task : new Date("2020-11-16")
        }
    }
])

// inserting mentors collection
db.mentors.insertMany([
    {
        mentor_id : 1,
        mentor_name : "Raghav Kumar K",
        mentee_count : 34
    },
    {
        mentor_id : 2,
        mentor_name : "Vidhya",
        mentee_count : 26
    },
    {
        mentor_id : 3,
        mentor_name : "Karan",
        mentee_count : 14
    },
    {
        mentor_id : 4,
        mentor_name : "Nirmala",
        mentee_count : 10
    },
])

// inserting tasks collection
db.tasks.insertMany([
    {
        task_id : 1,
        topic_id : 1,
        task_name : "Build a e-commerce UI with React",
        task_date : new Date('2020-10-20')
    },
    {
        task_id : 2,
        topic_id : 2,
        task_name : "Create a server with node.js for storing user data",
        task_date : new Date('2020-10-28')
    },
    {
        task_id : 3,
        topic_id : 2,
        task_name : "Booking app clone using node and express servers",
        task_date : new Date('2020-10-30')
    },
    {
        task_id : 4,
        topic_id : 3,
        task_name : "Solve DSA problems",
        task_date : new Date('2020-11-13')
    }   
]) 

// inserting company_drives collection
db.company_drives.insertMany([
    {
        company_id : 1,
        company_name : "Fresh Works",
        drive_date : new Date("2020-10-24")
    },
    {
        company_id : 2,
        company_name : "Zoho",
        drive_date : new Date("2020-10-29")
    },
    {
        company_id : 3,
        company_name : "Cred",
        drive_date : new Date("2020-11-10")
    },
    {
        company_id : 4,
        company_name : "Paypal",
        drive_date : new Date("2020-10-15")
    }
])

