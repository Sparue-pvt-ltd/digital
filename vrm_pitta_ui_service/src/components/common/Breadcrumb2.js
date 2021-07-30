

import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
    <div id="breadcrumb" class="division">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/" class="primary-color">Home</a></li>
                            <li class="breadcrumb-item"><a href={this.props.content1} class="primary-color">{this.props.content}</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default Breadcrumb;
