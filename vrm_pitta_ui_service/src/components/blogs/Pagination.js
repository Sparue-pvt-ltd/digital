import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<div class="bg-lightgrey page-pagination division">
  <div class="container">
    <div class="row">	
      <div class="col-md-12">

        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>
              <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
              <li class="page-item"><a class="page-link" href="#">2</a> </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
          </ul>	
        </nav>					

      </div>
    </div>  <!-- End row -->	
  </div> <!-- End container -->	
</div>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Pagination extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Pagination;
