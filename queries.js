// switch mongodatabase

//1.Find all the topics and tasks which are thought in the month of October
db.topics.find({
    $and:[
        {
            taken_date : { 
                $gte : ISODate("2020-10-01"), 
                $lte : ISODate("2020-10-31") }
        },
        {
           "task.date_of_task" : { 
            $gte : ISODate("2020-10-01"), 
            $lte : ISODate("2020-10-31") }
        }
    ]
})

//2.Find all the company drives between 15-oct-2022 and 31-oct-2022
db.company_drives.find({ drive_date: 
    { 
        $gte: ISODate("2020-10-15"),
        $lte: ISODate("2020-10-31")
    } 
})

//3.Find all the company drives and students who are appeared for the placement
db.users.aggregate([
    {
        $lookup: {
            from : "company_drives",
            localField : "company_drives",
            foreignField : "company_id",
            as : "company_drives"
        }
    },
    {
        $project : {
            name : 1,
            _id : 0,
            "company_drives.company_name": 1
        }
    }
])


//4.Find the number of problems solved by the user in codekata
db.users.aggregate([
    {
        $lookup : {
            from : "codekata",
            localField : "codekata",
            foreignField : "ques_id",
            as : "codekata_problems"
        }
    }, 
    {
        $project : {
            name : 1,
            _id : 0,
            codekata_problems : {
                $cond : { 
                    if : { $isArray: "$codekata_problems" },
                    then : { $size: "$codekata_problems" },
                    else : "0"
                }
            }
        }
    }
])

//5.Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ mentee_count : { $gt: 15 } },{ mentor_name: 1, _id: 0 })

//6.Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
db.users.find({
    $or : [
        {
            absent_on : { $exists : true, $ne: []}
        },
        {
            tasks_submitted : { $exists : true, $ne: [] }
        }
    ]
}).count()



