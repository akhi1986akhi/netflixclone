const express =require('express');
const router = express.Router();
const https = require('https');

const fs = require('fs');
const path = require('path');

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    let filePath = '';

    if (req.params.id == '1') {
        filePath = path.join(__dirname, '../media/1.mp4');
    } else if (req.params.id == '2') {
        filePath = path.join(__dirname, '../media/2.mp4');
    }
    else if (req.params.id == '3') {
        filePath = path.join(__dirname, '../media/3.mp4');
    }
    else if (req.params.id == '4') {
        filePath = path.join(__dirname, '../media/4.mp4');
    }
    else if (req.params.id == '5') {
        filePath = path.join(__dirname, '../media/5.mp4');
    }
    else if (req.params.id == '6') {
        filePath = path.join(__dirname, '../media/6.mp4');
    }
    else if (req.params.id == '7') {
        filePath = path.join(__dirname, '../media/7.mp4');
    }
    else if (req.params.id == '8') {
        filePath = path.join(__dirname, '../media/8.mp4');
    }
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        res.status(404).send("File not found");
        return;
    }

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (!range) {
        res.status(400).send("Requires Range Headers");
        return;
    }

    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": (end - start) + 1,
        "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(filePath, { start, end });
    videoStream.pipe(res);
});


module.exports = router
