import CommonLayout from "../layouts/CommonLayout";
import Hero from "../components/common/Hero";
import Breadcrumb2 from "../components/common/Breadcrumb2";
import Calltoaction from "../components/common/Calltoaction";
import Content from "../components/singleservice/Content";
import { useParams } from "react-router-dom";

function SingleService() {
  const { id } = useParams();

  const data =[
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    },
    {
      serviceTitle:'We create content that is useful and helpful (unique)',
      servicedescription:'An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integera congue magna at purus pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas magna suscipit luctus undo',
      serviceImageURL:'./assets/images/image-04.png'
    }
  ]
  return (
    <>
      <CommonLayout>
        <div class="inner-page-wrapper">
          <Hero cssId="service-details-page" heroTitle="About Vrm Pitta" heroDescription="We provide professional PPC, Web and SEO services to
                    increase online visibility and qualified leads to your
                    business"/>
          <Breadcrumb2 content="Services" content1="/services"/>
          <Content serviceTitle={data[id-1].serviceTitle} servicedescription={data[id-1].servicedescription} serviceImageURL={data[id-1].serviceImageURL} />
          <Calltoaction/>
        </div>
      </CommonLayout>
    </>
  );
}

export default SingleService;
