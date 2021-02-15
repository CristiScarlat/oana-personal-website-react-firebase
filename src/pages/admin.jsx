import React from 'react';


function AdminPage() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
                <h1 class="mt-2">Administrator</h1>
            </nav>
            <div class="container mt-3 pt-3">
                <form method="POST" action="/admin" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="album-label">Album name</label>
                        <input type="text" class="form-control" id="album-label" placeholder="Your pictures album name"
                            name="albumName" required="true" />
                    </div>
                    <div class="form-group">
                        <label for="album-description">Album description</label>
                        <textarea class="form-control" id="album-description" placeholder="Your pictures album description"
                            rows="10" name="albumDescription"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <form method="POST" action="/admin" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="uploadBtn">Upload files</label>
                        <input type="file" class="form-control-file" id="uploadBtn" name="files" multiple />
                    </div>
                    <button type="submit" class="btn btn-primary">Upload</button>
                </form>
                <div class="row m-2">
                    {/* {% for pic in uploadedPics %}
        <div class="form-group border align">
                        <label for="album-label">Label</label>
                        <input type="text" class="form-control" id="pic-label-{{ pic }}" placeholder="Your pictures label"
                            name="picLabel" required="true"/>
                            <img src="upload/{{ pic  }}" class="img-fluid rounded mx-auto d-block p-2" alt="No image" width="150px" />
        </div>
                        {% endfor %} */}
                </div>
            </div>
        </>
    )
}

export default AdminPage;