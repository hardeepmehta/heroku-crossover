exports.status = [{ //Depicting case 1: when buildTest fails
    id: 12436,
    date: 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',
    owner: 'JTuck',
    opened: false,
    status: 'failed',
    processing: false, // Becomes false once 'failed' or all have 'passed'
    buildTest: {
        percentage: 0, // Becomes 0 once made false
        status: 'failed', //  'pending','running','passed','failed',"Can't Run"
        debug: false,
        release: true,
        buildTime: 'Tue Dec 01 2015 02:00:00 GMT+0530 (IST)'
    },
    unitTest: {
        status: "Can't Run",
        percentage: 0,
        completedPercentage: 0,
        completedTasks: 0,
        uncompletedTasks: 0,
        timeTaken: 0

    },
    functionalTest: {
        status: "Can't Run",
        completedPercentage: 0,
        completedTasks: 0,
        uncompletedTasks: 0,
        timeTaken: 0
    }
},{ // Depicting case 2: when unitTest fails
    id: 42568,
    date: 'Wed Dec 02 2015 05:00:00 GMT+0530 (IST)',
    owner: 'CJay',
    opened: false,
    status: 'failed',
    processing: false, // Becomes false once 'failed' or all have 'passed'
    buildTest: {
        percentage: 100, // Becomes 0 once made false
        status: 'passed', //  'pending','running','passed','failed',"Can't Run"
        debug: true,
        release: true,
        buildTime: 'Wed Dec 02 2015 07:00:00 GMT+0530 (IST)'
    },
    unitTest: {
        percentage: 0, //Becomes 0 once made false
        status: 'failed',
        completedPercentage: 32,
        completedTasks: 0,
        uncompletedTasks: 0,
        timeTaken: 0
    },
    functionalTest: {
        status: "Can't Run",
        completedPercentage: 0,
        completedTasks: 0,
        uncompletedTasks: 0,
        timeTaken: 0
    }
},{ // Depicting case 3: when functionalTest fails
    id: 42568,
    date: 'Thu Dec 03 2015 05:00:00 GMT+0530 (IST)',
    owner: 'John',
    opened: false,
    status: 'failed',
    processing: false, // Becomes false once 'failed' or all have 'passed'
    buildTest: {
        percentage: 100, // Becomes 0 once made false
        status: 'passed', //  'pending','running','passed','failed',"Can't Run"
        debug: true,
        release: true,
        buildTime: 'Thu Dec 03 2015 07:00:00 GMT+0530 (IST)'
    },
    unitTest: {
        percentage: 100, //Becomes 0 once made false
        status: 'passed',
        completedPercentage: 100,
        completedTasks: 523,
        uncompletedTasks: 0,
        timeTaken: 5.62
    },
    functionalTest: {
        status: 'failed',
        percentage: 0, // Becomes 0 once made false,
        completedPercentage: 56,
        completedTasks: 0,
        uncompletedTasks: 0,
        timeTaken: 0
    }
},{ // Depicting case 4: when Everything passes
    id: 42568,
    date: 'Thu Dec 03 2015 05:00:00 GMT+0530 (IST)',
    owner: 'Mary',
    opened: false,
    status: 'passed',
    processing: false, // Becomes false once 'failed' or all have 'passed'
    buildTest: {
        percentage: 100, // Becomes 0 once made false
        status: 'passed', //  'pending','running','passed','failed',"Can't Run"
        debug: true,
        release: true,
        buildTime: 'Thu Dec 03 2015 07:00:00 GMT+0530 (IST)'
    },
    unitTest: {
        percentage: 100, //Becomes 0 once made false
        status: 'passed',
        completedPercentage: 100,
        completedTasks: 523,
        uncompletedTasks: 0,
        timeTaken: 5.62
    },
    functionalTest: {
        status: 'passed',
        percentage: 100, // Becomes 0 once made false,
        completedPercentage: 78,
        completedTasks: 124,
        uncompletedTasks: 12,
        timeTaken: 12.56
    }
}];