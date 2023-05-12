const video = require('../models/video');

const getData = (req, res, next) => {
  video.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const dropCollection = (req, res) => {
  video.deleteMany({})
    .then((i) => {
      res.send(i);
    })
    .catch((err) => {
      console.log(err)
    })
};

const updateData = (req, res) => {
  req.body.filter((i) => !i.snippet.title.includes('#Shorts')).forEach((i) => {
    video.findOneAndUpdate({ 'id': i.id.videoId}, {
      '$set': {
        'id': i.id.videoId,
        'date': i.snippet.publishedAt,
        'title': i.snippet.title,
      }
    }, { upsert : true })
      .then(() => {
        console.log('Ok')
      })
      .catch((err) => {
        console.log(err)
      })
  })
  res.send(['ok']);
};

module.exports = { getData, updateData, dropCollection };
