function captureAudio() {
    navigator.device.capture.captureAudio(captureSuccess, captureError);
}

function captureVideo() {
    navigator.device.capture.captureVideo(captureSuccess, captureError);
}

function captureSuccess(files) {
    // more than 1 file might be returned
    // so perform a loop and upload all of them
    for (var i = 0; i < files.length; i++) {
        uploadMediaFile(files[i]);
    }
}

function captureError(error) {
    alert("Error during capture = " + error.code);
}

function uploadMediaFile(file) {
    var uploadOptions = new FileUploadOptions();
    uploadOptions.fileKey = "file";
    uploadOptions.fileName = currentPhoto.substr(file.lastIndexOf('/') + 1);

    var fileTransfer = new FileTransfer();
    fileTransfer.path = file.fullPath;
    fileTransfer.name = file.name;
    
    fileTransfer.upload(file, "http://www.webistrate.com/phonegap/upload.php", uploadSuccess, uploadFail, uploadOptions);
}

function uploadSuccess(result) {
    alert("Successfully transferred " + result.bytesSent + "bytes");
}

function uploadFail(error) {
    alert("Error uploading file: " + error.code);
}