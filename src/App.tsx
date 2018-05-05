import * as React from 'react';
import './App.css';
import FileUploader from './components/FileUploader';

// import logo from './logo.svg';

class App extends React.Component {
  // public fileUploadSuccess(event: any) {
  //   if (event) {
  //     return "";
  //   }
  // }
  public render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <span className="glyphicon glyphicon-cloud-upload" />
                  <h2>File Uploader</h2>
                  <h4>SQR Files</h4>
                  <FileUploader />
                  <br/>
                  <br/>
                  <div>
                    <button className="btn btn-success btn-lg" id="downloadBtn">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
