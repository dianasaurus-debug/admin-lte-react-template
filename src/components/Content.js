import React from 'react';

function Content() {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard v3</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v3</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-0">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">Online Store Visitors</h3>
                                        <a href="javascript:void(0);">View Report</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex">
                                        <p className="d-flex flex-column">
                                            <span className="text-bold text-lg">820</span>
                                            <span>Visitors Over Time</span>
                                        </p>
                                        <p className="ml-auto d-flex flex-column text-right">
                                            <span className="text-success">
                                              <i className="fas fa-arrow-up"></i> 12.5%
                                            </span>
                                            <span className="text-muted">Since last week</span>
                                        </p>
                                    </div>

                                    <div className="position-relative mb-4">
                                        <canvas id="visitors-chart" height="200"></canvas>
                                    </div>

                                    <div className="d-flex flex-row justify-content-end">
                                      <span className="mr-2">
                                        <i className="fas fa-square text-primary"></i> This Week
                                      </span>

                                        <span>
                                        <i className="fas fa-square text-gray"></i> Last Week
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;
