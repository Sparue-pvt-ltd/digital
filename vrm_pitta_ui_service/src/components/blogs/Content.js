import React, { Component } from "react";
import DOMPurify from "dompurify";

const myHTML = `
<section id="blog-2" class="bg-lightgrey wide-60 blog-section division">				
<div class="container">


  <!-- BLOG POSTS -->
  <div class="row">
    <div class="col-md-12 reviews-grid">
      <div class="masonry-wrap grid-loaded">


        <!-- BLOG POST #1 -->
        <div class="masonry-item">
          <div class="blog-post">
        
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-1-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 12 min read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post1">Quisque sapien justo, aliquet non molestie and purus nulla pulvinar
                  commodo necvenenatis
                </a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus and pretium purus pretium undo
                  dapibus mauris donec ociis et magnis sapien...
              </p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Sean McMarthy</a> - 24 minutes ago</p>	
              <p class="post-tag"><a href="#">#SocialMedia</a>, <a href="#">#Marketing</a></p>

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #1 -->


        <!-- BLOG POST #2 -->
        <div class="masonry-item">
          <div class="blog-post">
        
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-8-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 8 min read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post2">Tempor sapien donec gravida ipsum a porta justo vitae</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus and 
                  pretium ipsum primis in cubilia laoreet an augue egestas luctus donec efficitur...
              </p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Ben Markton</a> - January 27, 2019</p>	
              <p class="post-tag"><a href="#">#Advice</a>, <a href="#">#LinkBuilding</a></p>

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #2 -->


        <!-- BLOG POST #3 -->
        <div class="masonry-item">
          <div class="blog-post">
      
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-3-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 21 min read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post3">Dapibus libero quisque eu tristique neque blandit tristique</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Caroline</a> - January 19, 2020</p>
              <p class="post-tag"><a href="#">#LocalSEO</a>, <a href="#">#Marketing</a>, <a href="#">#PPC</a></p>	

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #3 -->


        <!-- BLOG POST #4 -->
        <div class="masonry-item">
          <div class="blog-post">
        
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-4-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 36 min read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post4">Quisque sapien justo, aliquet non molestie a purus venenatis</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna 
                  ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero...
              </p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Sean McMarthy</a> - January 12, 2020</p>	
              <p class="post-tag"><a href="#">#SocialMedia</a>, <a href="#">#Marketing</a></p>

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #4 -->


        <!-- BLOG POST #5 -->
        <div class="masonry-item">
          <div class="blog-post">
        
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-5-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 17 min read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post5">Tempor sapien donec gravida ipsum a porta justo vitae</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Ben Markton</a> - December 23, 2019</p>	
              <p class="post-tag"><a href="#">#Advice</a>, <a href="#">#LinkBuilding</a></p>

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #5 -->


        <!-- BLOG POST #6 -->
        <div class="masonry-item">
          <div class="blog-post">
      
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-6-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 12 hours read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post6">Dapibus libero quisque eu tristique neque blandit tristique</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus and 
                  pretium ipsum primis in cubilia laoreet an augue egestas luctus donec efficitur...
              </p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Caroline</a> - December 14, 2019</p>
              <p class="post-tag"><a href="#">#LocalSEO</a>, <a href="#">#Marketing</a>, <a href="#">#PPC</a></p>	

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #6 -->


        <!-- BLOG POST #7 -->
        <div class="masonry-item">
          <div class="blog-post">
        
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-7-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 41 min read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post7">Quisque sapien justo, aliquet non molestie a purus venenatis
                    purus aliquam eget lacinia elit
                </a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet and 
                  augue egestas luctus risus luctus mauris auctor purus euismod and pretium pretium...
              </p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Sean McMarthy</a> - December 11, 2019</p>	
              <p class="post-tag"><a href="#">#SocialMedia</a>, <a href="#">#Marketing</a></p>

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #7 -->


        <!-- BLOG POST #8 -->
        <div class="masonry-item">
          <div class="blog-post">
        
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-2-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 6 hours read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post8">Tempor sapien donec gravida ipsum a porta justo vitae</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus and 
                  pretium ipsum primis in cubilia laoreet an augue egestas luctus donec efficitur...
              </p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Ben Markton</a> - December 05, 2019</p>	
              <p class="post-tag"><a href="#">#Advice</a>, <a href="#">#LinkBuilding</a></p>

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #8 -->


        <!-- BLOG POST #9 -->
        <div class="masonry-item">
          <div class="blog-post">
      
            <!-- BLOG POST IMAGE -->
            <div class="blog-post-img">
              <img class="img-fluid" src="./assets/images/blog/post-9-img.jpg" alt="blog-post-image" />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="blog-post-txt">

              <!-- Post Tag -->
              <p class="post-read"><i class="far fa-clock"></i> - 4 hours read</p>

              <!-- Post Link -->
              <h5 class="h5-md">
                <a href="/single-post9">Dapibus libero quisque eu tristique neque blandit tristique</a>
              </h5>

              <!-- Text -->
              <p class="grey-color">Fringilla risus luctus mauris auctor purus euismod and pretium purus pretium...</p>

              <!-- Post Data -->
              <p class="post-data">by <a href="#">Caroline</a> - November 28, 2019</p>
              <p class="post-tag"><a href="#">#LocalSEO</a>, <a href="#">#Marketing</a>, <a href="#">#PPC</a></p>	

            </div>	<!-- END BLOG POST TEXT -->

          </div>
        </div>	<!-- END  BLOG POST #9 -->


      </div>
      </div>
  </div>	<!-- END BLOG POSTS -->


</div>	   <!-- End container -->		
</section>
`;

const mySafeHTML = DOMPurify.sanitize(myHTML);

class Content extends Component {
  render() {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />
      </>
    );
  }
}
export default Content;
