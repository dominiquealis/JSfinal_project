var express = require('express');
var router = express.Router();

const Jobs = require('../models/jobs');
const Comments = require('../models/comments');

function renderIndex(res) {
  Jobs.find(function(err, jobs) {
    res.render('index', { 
      jobs: jobs,
    });
  });  
}


/* GET home page. */
router.get('/', function(req, res, next) {
  renderIndex(res);
});


//This route will create an item in my database, this is working
router.post('/create', function(req, res) {
  Jobs.create(req.body, function(err, job) {
  	if(err) {
  		console.log(err);
  	}

	Jobs.find(function(err, jobs) {
	    res.render('index', { 
	    	jobs: jobs,
	    });
  	});
  });
});


//route for an individual job, not sure if i will need this in the end. 
router.get('/job/:id', function(req, res) {
  let id = req.params.id;
  
  Jobs.findById(id, function(err, jobs) {
    res.render('show', { jobs: jobs });
  });
});


//route to create a comment, comment goes into DB but not sure how to link
router.post('/:id/createcomment', function(req, res) {
	let id = req.params.id;
  
  Jobs.findById(id, function(err, jobs) {
    res.render('show', { jobs: jobs });
  });
});

//route that creates a comment from the main view, route works, but commenting doesnt
router.post('/:id/createcommentmainview', function(req, res) {
  let id = req.params.id;

  Jobs.findById(id, function(err, job) {
    job.comments.push({ notes: req.body.notes })
    job.save(function(err, job){
      // res.send(job);
      renderIndex(res);


    })
  });

  // renderIndex(res);

});



//route to edit an existing entry from the individual listing
router.get('/jobs/edit/:id', function(req, res) {
  let id = req.params.id;
  
  Jobs.findById(id, function(err, jobs) {
    res.render('edit', { jobs: jobs });
  });
});


// route to edit entry from the main view
router.post('/:id/editmainview', function(req, res) {
  let id = req.params.id;
  console.log("Test1");

  Jobs.findByIdAndUpdate(id, {$set:req.body}, function(err, result){
        if(err){
            console.log(err);
        }
        renderIndex(res);
    });
});


// //route to update an id
  
router.post('/jobs/confirm/:id', function(req, res) {
  let id = req.params.id;
  console.log("Test1");

  Jobs.findByIdAndUpdate(id, {$set:req.body}, function(err, result){
        if(err){
            console.log(err);
        }
  console.log("Test2");
        res.redirect('index');
          console.log("Test3");
    });
});


  router.get('/jobs/confirm/:id', function(req, res) {
    res.render('confirm');
  });

//post request to mark an item as archive, this is not working!
 router.post('/:id/archive', function(req, res) {
  let id = req.params.id;
  console.log("archive");

  Jobs.findByIdAndUpdate(id, {$set:req.body}, function(err, result){
        if(err){
            console.log(err);
        }
        renderIndex(res);
    });
}); 




//route to delete an entry 
router.delete('/jobs/delete/:id', function (req, res) {
  let id = req.params.id;

  Jobs.findByIdAndRemove(req.params.id, (err, places) =>{
    res.redirect('/')
  });
})


// //route to create a review

// router.post('/createreview', function(req, res) {

//   Place.create(req.body, function(err, places) {
//     res.render('show', { places: places });
//   });
// });


module.exports = router;