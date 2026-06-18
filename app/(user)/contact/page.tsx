// Description: Contact page
import ContactText from "@/assets/contact-text.png";
import { ContactForm } from "@/components/ContactForm";
import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
      <div className="mx-auto w-5/6 py-28">
        <MotionDiv className="md:w-3/5" duration={0.5} x={-50}>
          <div className="relative">
            <div className="before:absolute before:-right-96 before:top-14 md:before:content-arrow3">
              <Image
                src={ContactText.src}
                alt="Contact Text"
                width={500}
                height={500}
              />
            </div>
          </div>
          <p className="mt-5 leading-relaxed">
            I&apos;m looking for data analyst, analytics engineering, and junior
            data engineering roles in London. Fill out the form below to get in
            touch — collaboration and open-source projects also welcome.
          </p>
        </MotionDiv>
        {/* FORM CONTENT */}
        <div className="relative z-20 mt-3 justify-between gap-8 md:flex">
          <MotionDiv
            className="mt-10 basis-3/5 before:absolute before:-bottom-20 before:-left-14 before:z-[-1] before:content-shapes md:mt-0"
            duration={0.8}
            y={50}
          >
            {/* Link form to personal email address */}
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Contact;
