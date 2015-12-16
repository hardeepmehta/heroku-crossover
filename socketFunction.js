var returnRandomNumber = function( min, max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var emit = function( testId, updateObj, socket ) {
    socket.emit('test-result', {
        id: testId,
        update: updateObj
    });
};

var buildFailCases = {
  0: function( test, socket ) { // Either debug fails
      setTimeout( function(){

          emit( test.id, {
              buildTest: {
                  percentage: 35, // Becomes 0 once made false
                  status: 'running', //  'pending','running','passed','failed',"Can't Run"
                  debug: false,
                  release: true,
                  buildTime: new Date()
              },
              status: 'running'
          }, socket);
      },1000);

      setTimeout( function(){
          emit( test.id, {
              buildTest: {
                  percentage: 55, // Becomes 0 once made false
                  status: 'running', //  'pending','running','passed','failed',"Can't Run"
                  debug: false,
                  release: true,
                  buildTime: new Date()
              },
              status: 'running'
          }, socket);
      },2000);

      setTimeout( function(){
          emit( test.id, {
              buildTest: {
                  percentage: 0, // Becomes 0 once made false
                  status: 'failed', //  'pending','running','passed','failed',"Can't Run"
                  debug: false,
                  release: true,
                  buildTime: new Date()
              },
              status: 'failed',
              processing: false // Becomes false once 'failed' or all have 'passed'
          }, socket);
      },3000);
  },
  1: function( test, socket ) { //Either release fails
      setTimeout( function(){

          emit( test.id, {
              buildTest: {
                  percentage: 35, // Becomes 0 once made false
                  status: 'running', //  'pending','running','passed','failed',"Can't Run"
                  debug: false,
                  release: true,
                  buildTime: new Date()
              },
              status: 'running'
          }, socket);
      },1000);

      setTimeout( function(){
          emit( test.id, {
              buildTest: {
                  percentage: 55, // Becomes 0 once made false
                  status: 'running', //  'pending','running','passed','failed',"Can't Run"
                  debug: false,
                  release: true,
                  buildTime: new Date()
              },
              status: 'running'
          }, socket);
      },2000);

      setTimeout( function(){
          emit( test.id, {
              buildTest: {
                  percentage: 0, // Becomes 0 once made false
                  status: 'failed', //  'pending','running','passed','failed',"Can't Run"
                  debug: true,
                  release: false,
                  buildTime: new Date()
              },
              status: 'failed',
              processing: false // Becomes false once 'failed' or all have 'passed'
          }, socket);
      },3000);
  }
};

var testCases = {

    0: function( test, socket ) { //buildFail
        var build = returnRandomNumber(0,1);

        buildFailCases[ build ]( test, socket );
    },

    1: function( test, socket ) { //unitFail

        //First complete building

        setTimeout( function(){

            emit( test.id, {
                buildTest: {
                    percentage: 35, // Becomes 0 once made false
                    status: 'running', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                status: 'running'
            }, socket);
        },1000);

        setTimeout( function(){
            emit( test.id, {
                buildTest: {
                    percentage: 55, // Becomes 0 once made false
                    status: 'running', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                status: 'running'
            }, socket);
        },2000);

        setTimeout( function(){
            emit( test.id, {
                buildTest: {
                    percentage: 100, // Becomes 0 once made false
                    status: 'passed', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                unitTest: {
                    percentage: 0, //Becomes 0 once made false
                    status: 'pending',
                    completedPercentage: 0,
                    completedTasks: 0,
                    uncompletedTasks: 0,
                    timeTaken: 0
                },
                status: 'pending'
            }, socket);
        },3000);

        //Now let's start unitTesting

        setTimeout( function(){

            emit( test.id, {
                unitTest: {
                    percentage: 46, //Becomes 0 once made false
                    status: 'running',
                    completedPercentage: 46,
                    completedTasks: 45,
                    uncompletedTasks: 2,
                    timeTaken: 0
                },
                status: 'running'
            }, socket);
        },4000);

        setTimeout( function(){
            emit( test.id, {
                unitTest: {
                    percentage: 72, //Becomes 0 once made false
                    status: 'running',
                    completedPercentage: 72,
                    completedTasks: 78,
                    uncompletedTasks: 8,
                    timeTaken: 0
                },
                status: 'running'
            }, socket);
        },5000);

        setTimeout( function(){
            emit( test.id, {
                unitTest: {
                    percentage: 0, //Becomes 0 once made false
                    status: 'failed',
                    completedPercentage: 72,
                    completedTasks: 78,
                    uncompletedTasks: 8,
                    timeTaken: 9.78
                },
                status: 'failed'
            }, socket);
        },6000);


    },

    2: function( test, socket ) { //functionalFail
        //First complete building

        setTimeout( function(){

            emit( test.id, {
                buildTest: {
                    percentage: 35, // Becomes 0 once made false
                    status: 'running', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                status: 'running'
            }, socket);
        },1000);

        setTimeout( function(){
            emit( test.id, {
                buildTest: {
                    percentage: 55, // Becomes 0 once made false
                    status: 'running', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                status: 'running'
            }, socket);
        },2000);

        setTimeout( function(){
            emit( test.id, {
                buildTest: {
                    percentage: 100, // Becomes 0 once made false
                    status: 'passed', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                unitTest: {
                    percentage: 0, //Becomes 0 once made false
                    status: 'pending',
                    completedPercentage: 0,
                    completedTasks: 0,
                    uncompletedTasks: 0,
                    timeTaken: 0
                },
                status: 'pending'
            }, socket);
        },3000);

        //Now let's start unitTesting

        setTimeout( function(){

            emit( test.id, {
                unitTest: {
                    percentage: 46, //Becomes 0 once made false
                    status: 'running',
                    completedPercentage: 46,
                    completedTasks: 45,
                    uncompletedTasks: 2,
                    timeTaken: 0
                },
                status: 'running'
            }, socket);
        },4000);

        setTimeout( function(){
            emit( test.id, {
                unitTest: {
                    percentage: 72, //Becomes 0 once made false
                    status: 'running',
                    completedPercentage: 72,
                    completedTasks: 78,
                    uncompletedTasks: 8,
                    timeTaken: 0
                },
                status: 'running'
            }, socket);
        },5000);

        setTimeout( function(){
            emit( test.id, {
                unitTest: {
                    percentage: 100, //Becomes 0 once made false
                    status: 'passed',
                    completedPercentage: 86,
                    completedTasks: 195,
                    uncompletedTasks: 32,
                    timeTaken: 11.9
                },
                functionalTest: {
                    status: "pending",
                    completedPercentage: 0,
                    completedTasks: 0,
                    uncompletedTasks: 0,
                    timeTaken: 0
                },
                status: 'pending'
            }, socket);
        },6000);

        setTimeout( function(){
            emit( test.id, {
                functionalTest: {
                    status: "running",
                    completedPercentage: 36,
                    completedTasks: 15,
                    uncompletedTasks: 5,
                    timeTaken: 3
                },
                status: 'running'
            }, socket);
        },7000);

        setTimeout( function(){
            emit( test.id, {
                functionalTest: {
                    status: "running",
                    completedPercentage: 89,
                    completedTasks: 67,
                    uncompletedTasks: 23,
                    timeTaken: 10
                },
                status: 'running'
            }, socket);
        },8000);

        setTimeout( function(){
            emit( test.id, {
                functionalTest: {
                    status: "failed",
                    completedPercentage: 92,
                    completedTasks: 70,
                    uncompletedTasks: 26,
                    timeTaken: 10.56
                },
                status: 'failed'
            }, socket);
        },9000);

    },

    3: function( test, socket ) { //allPass

        //First complete building

        setTimeout( function(){

            emit( test.id, {
                buildTest: {
                    percentage: 35, // Becomes 0 once made false
                    status: 'running', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                status: 'running'
            }, socket);
        },1000);

        setTimeout( function(){
            emit( test.id, {
                buildTest: {
                    percentage: 55, // Becomes 0 once made false
                    status: 'running', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                status: 'running'
            }, socket);
        },2000);

        setTimeout( function(){
            emit( test.id, {
                buildTest: {
                    percentage: 100, // Becomes 0 once made false
                    status: 'passed', //  'pending','running','passed','failed',"Can't Run"
                    debug: true,
                    release: true,
                    buildTime: new Date()
                },
                unitTest: {
                    percentage: 0, //Becomes 0 once made false
                    status: 'pending',
                    completedPercentage: 0,
                    completedTasks: 0,
                    uncompletedTasks: 0,
                    timeTaken: 0
                },
                status: 'pending'
            }, socket);
        },3000);

        //Now let's start unitTesting

        setTimeout( function(){

            emit( test.id, {
                unitTest: {
                    percentage: 46, //Becomes 0 once made false
                    status: 'running',
                    completedPercentage: 46,
                    completedTasks: 45,
                    uncompletedTasks: 2,
                    timeTaken: 0
                },
                status: 'running'
            }, socket);
        },4000);

        setTimeout( function(){
            emit( test.id, {
                unitTest: {
                    percentage: 72, //Becomes 0 once made false
                    status: 'running',
                    completedPercentage: 72,
                    completedTasks: 78,
                    uncompletedTasks: 8,
                    timeTaken: 0
                },
                status: 'running'
            }, socket);
        },5000);

        setTimeout( function(){
            emit( test.id, {
                unitTest: {
                    percentage: 100, //Becomes 0 once made false
                    status: 'passed',
                    completedPercentage: 86,
                    completedTasks: 195,
                    uncompletedTasks: 32,
                    timeTaken: 11.9
                },
                functionalTest: {
                    status: "pending",
                    completedPercentage: 0,
                    completedTasks: 0,
                    uncompletedTasks: 0,
                    timeTaken: 0
                },
                status: 'pending'
            }, socket);
        },6000);

        setTimeout( function(){
            emit( test.id, {
                functionalTest: {
                    status: "running",
                    completedPercentage: 36,
                    completedTasks: 15,
                    uncompletedTasks: 5,
                    timeTaken: 3
                },
                status: 'running'
            }, socket);
        },7000);

        setTimeout( function(){
            emit( test.id, {
                functionalTest: {
                    status: "running",
                    completedPercentage: 89,
                    completedTasks: 67,
                    uncompletedTasks: 23,
                    timeTaken: 10
                },
                status: 'running'
            }, socket);
        },8000);

        setTimeout( function(){
            emit( test.id, {
                functionalTest: {
                    status: "passed",
                    completedPercentage: 79,
                    completedTasks: 78,
                    uncompletedTasks: 27,
                    timeTaken: 11.98
                },
                status: 'passed'
            }, socket);
        },9000);

    }

};

module.exports = function( socket ) {
    socket.on('new-test', function( test ){
        var random = returnRandomNumber(0,3);
        testCases[ random ]( test, socket );
    });
};