import { AcademicWritingCards } from "../../Components/Cards/AcademicWritingCards"
import { FAQ } from "../../Components/FAQ"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import { IntroText } from "../../Components/IntroText"
import { OrderSteps } from "../../Components/OrderSteps"
import { ServicesBanner } from "../../Components/ServicesBanner"
import Testimonials from "../../Components/Testimonials"
import AOSInitializer from "../../AOSInitializer"

export const AcademicWriting = () => {

    return (
        <>
        <Header />
        <IntroText
        subtitle="Welcome to our expertise:"
        title="Academic Writing"
        desc="Explore professional academic writing services from our team of experienced writers. We provide high-quality content tailored to your specific requirements"
        />
        <ServicesBanner
        subtitle="Welcome to our services:"
        title="Academic Writing Tailored to Your Needs"
        desc="Our custom academic writing process is designed to meet the unique requirements of our clients. We provide high-quality content that is tailored to your specific needs and objectives."
        className="col-lg-6"
        col_1_title="Quality"
        col_1_des="Our team comprises experts who ensure the highest standards of quality and originality in every piece of content."
        col_2_title="Timely Delivery"
        col_2_desc="We guarantee on-time delivery, allowing you to publish your content without any delays."
        imgUrl="/images/academic6.jpg"
        />
        <div className="text-heading p-4 text-center" data-aos="zoom-in" >
          <p>Welcome to our services:</p>
          <h1>Wide Range of Academic Writing Services</h1>
          <p className="">
          We offer a variety of content writing services to cater to your needs. Our team
          </p>
          <p>
          of expert writers can handle various types of content, including articles, blog posts, social media content, and much more
          </p>
        </div>
        <div className="container">
        <AcademicWritingCards />
        </div>
        <ServicesBanner
          subtitle="Quality"
          title="Expert Academic Writing Service for your Business"
          desc="Our Academic writing service provides clients with expert writers, original content, and free revisions. We are committed to delivering high-quality content that meets your business needs."
          col_1_title="Expert Writers"
          col_1_des="Our team of experienced writers ensures your content is well-researched and professionally written."
          col_2_title="Original Content"
          col_2_desc="We guarantee 100% original and plagiarism-free content tailored to your specific requirements"
          className="col-lg-6"
          imgUrl="/images/academic5.jpg"
        />

        <OrderSteps imgUrl="/images/Training Manuals.jpg" />
        <Testimonials />
        <FAQ />
        <Footer/>
        </>
    )
}